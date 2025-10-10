---
id: webhooks
title: Webhooks
---

# Webhooks

Senden Sie verarbeitete Kontoauszugsdaten in Echtzeit an Ihr gewünschtes Ziel.  
Automatisches Übertragen der extrahierten Informationen an jede Anwendung, die Webhooks unterstützt.

### Zugriff auf Integrationen
1. [Login](https://bankstmtconverter.com/login) in Ihr **Bank Statement Converter**-Konto. 
2. Gehen Sie zum **Dashboard**.  
3. Klicken Sie auf **Integrationen → Webhook**  
4. Geben Sie den **Namen** und die **Ziel-URL** ein, die von der Drittanbieter-App bereitgestellt wird, an die Sie die Daten senden möchten.  
5. Klicken Sie auf **Absenden**  
6. Stellen Sie sicher, dass der Webhook **aktiv** ist. Sie sehen möglicherweise einen Statusindikator wie „Aktiv“ oder „Enabled“.  
7. Sie können bestehende Webhooks jederzeit **bearbeiten**, **löschen** oder **protokollieren** über die Webhooks-Seite in Integrationen.  
8. Halten Sie Ihre Webhook-URLs sicher, um unbefugten Zugriff zu verhindern.

---

# Daten an einen Webhook senden

Wenn Sie Ihre verarbeiteten Daten an Ihren Server, eine andere App oder eine Plattform senden möchten, die nicht direkt mit Google Sheets oder ähnlichen Tools integriert ist, ist der einfachste Weg die Verwendung eines **Webhooks**. Ein Webhook ermöglicht es, Daten von einer Anwendung zur anderen in **Echtzeit** zu übertragen, was praktischer ist als herkömmliche APIs.

## Schritte zum Export Ihrer verarbeiteten Daten über Webhook

**Schritt 1:** Kopieren Sie die Endpunkt-URL der Anwendung, an die Sie die Daten senden möchten.  

**Schritt 2:** Gehen Sie in Ihrem [Bank Statement Converter](https://bankstmtconverter.com/) Konto zu **Integrationen → Webhooks**.  

![webhook](/img/webhook1.png)

**Schritt 3:** Klicken Sie auf **„Webhook erstellen“**, wählen Sie einen Auslöser (typischerweise **„Dokument verarbeitet“**) und fügen Sie die Ziel-URL ein.  
![destinationurl](/img/webhookdestinationurl.png)

Ab diesem Zeitpunkt wird Bank Statement Converter den Webhook jedes Mal auslösen, wenn das ausgewählte Ereignis eintritt.  

Sie können auch Dienste wie [webhook.site](https://webhook.site/) verwenden, um einen Test-Webhooks-Endpunkt zu generieren und die empfangenen Payload-Daten in Echtzeit anzuzeigen.

## Konfiguration Ihres Servers zum Empfangen von Payloads

Wenn Sie Webhook-Ereignisse auf Ihrem eigenen Server empfangen möchten, können Sie die folgenden Codebeispiele verwenden, um die Payload-Daten effektiv zu verarbeiten.

#### PHP
```php
$payload = @file_get_contents('php://input');
// ...
http_response_code(200);

```


#### go
```go
package main

import (
    "io/ioutil"
    "net/http"
)

func main() {
    http.HandleFunc("/webhook", func(w http.ResponseWriter, r *http.Request) {
        // Rohdaten des Requests lesen
        payload, err := ioutil.ReadAll(r.Body)
        if err != nil {
            http.Error(w, "Konnte Body nicht lesen", http.StatusInternalServerError)
            return
        }
        defer r.Body.Close()

        // ... Payload verarbeiten
        _ = payload // Platzhalter wie bei PHP

        // 200 OK Antwort senden
        w.WriteHeader(http.StatusOK)
    })

    // Server auf Port 4242 starten
    http.ListenAndServe(":4242", nil)
}

```

#### Python
```python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    payload = request.data
    # ...
    return jsonify(success=True)


```

#### NodeJs
```JavaScript
const express = require('express');
const app = express();

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const payload = request.body;
  // ...
  response.send();
});

app.listen(4242, () => console.log('Server läuft auf Port 4242'));

```
# Schützen Sie Ihre Webhooks (Optional)

Um Webhooks zu empfangen, benötigen Sie eine **öffentlich zugängliche URL** (den Webhook-Endpunkt).  
Seien Sie sich bewusst, dass dies unsicher sein kann, da jeder, der die URL kennt, Aktionen auf Ihrem Server auslösen könnte.

Bank Statement Converter stellt für jeden Webhook ein **einzigartiges Signing Secret** bereit. Jede Webhook-Payload wird mit diesem Secret signiert, und die Signatur wird im Request-Header `Bankstatementconverter-signature` gesendet.  

Die Überprüfung dieser Signatur stellt sicher, dass die Anfrage echt ist und tatsächlich von Bank Statement Converter stammt.

## So überprüfen Sie die Signatur

1. Verwenden Sie Ihr **Signing Secret**, um eine Signatur für die empfangene Payload zu generieren.  
2. Vergleichen Sie Ihre generierte Signatur mit dem `Bankstatementconverter-signature` Header, der mit dem Webhook gesendet wurde.  
3. Stimmen beide Signaturen überein, ist die Anfrage authentisch und kann sicher verarbeitet werden.

![signingsecretkey](/img/webhooksigningkey.png)

⚠️ Hinweis: Ein Signing Secret ist 30 Minuten gültig. Danach schlagen Anfragen, die mit dem abgelaufenen Secret signiert wurden, fehl.

#### Schritte zur Signaturprüfung

- Erstellen Sie einen Hash der gesamten empfangenen Payload mit dem HMAC SHA-256-Algorithmus unter Verwendung Ihres Signing Secret als Schlüssel.  
- Konvertieren Sie diesen Hash in Base64.  
- Vergleichen Sie Ihre generierte Signatur mit dem Wert im `Bankstatementconverter-signature` Header.  
- Stimmen beide Werte überein, ist der Webhook verifiziert.

---

# Webhook-Ereignisfelder

![webhookworks](/img/webhookworks.png)

| Feldname       | Wert aus Ihrem Event                  | Bedeutung                                                                                  |
|----------------|--------------------------------------|--------------------------------------------------------------------------------------------|
| `event`        | `"document.extracted"`               | Die Hauptaktion: Das Dokument wurde erfolgreich verarbeitet und der Inhalt/Metadaten stehen nun zur Verfügung. Dies löst Aktionen in Ihrem System aus. |
| `document_id`  | `"01k6mabs1npmhaedy6yf1c9hmc"`      | Eine eindeutige Kennung für dieses spezifische Dokument. Verwenden Sie diese ID, um die extrahierten Daten (Text, Tabellen usw.) abzurufen. |
| `name`         | `"Pixalto-Pricing (1).pdf"`         | Der ursprüngliche Dateiname des Dokuments.                                                 |
| `size`         | `15025`                              | Die Größe des Dokuments in Bytes.                                                          |
| `pages`        | `1`                                  | Die Anzahl der Seiten im Dokument.                                                        |
| `download_url` | `(Eine URL)`                         | Ein temporärer Link zum Herunterladen des Originaldokuments oder der extrahierten Daten (z. B. CSV/JSON-Datei). |

---

## Referenz

:::note
Folgen Sie dem Screenshot oben für eine visuelle Anleitung.  
:::

1. Geben Sie den **Namen** und die **Ziel-URL** ein, die von der Drittanbieter-App bereitgestellt werden, an die Sie die Daten senden möchten.  

![webhook](/img/webhook.png)

2. Stellen Sie sicher, dass der Webhook **aktiv** ist. Sie sehen möglicherweise einen Statusindikator wie „Aktiv“ oder „Enabled“.  

![webhooksigningkey](/img/webhooksigningkey.png)

3. Im Optionsmenü können Sie **Name und Ziel-URL bearbeiten oder löschen**.  

![Editwebhook](/img/editwebhook.png)  
![Deletewebhook](/img/deletewebhook.png)

4. Klicken Sie im Optionsmenü auf **Logs**, um Ihre **Webhook-Protokolle** anzuzeigen.  

![logs](/img/logs.png)

:::note
Folgen Sie dem Video für eine Schritt-für-Schritt-Anleitung.  
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/nglpTMgxV6M?si=jJmj9YWj5m0LZ4gj" title="YouTube-Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
