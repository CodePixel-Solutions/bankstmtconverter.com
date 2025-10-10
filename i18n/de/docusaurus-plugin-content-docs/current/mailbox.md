---
id: mailbox
title: Mailbox
---

## Automatisieren Sie die Datenerfassung aus Ihren E-Mails

Willkommen bei **Bank Statement Converter** — eine einfache Möglichkeit, Daten automatisch aus E-Mails zu extrahieren und angehängte Kontoauszüge in strukturierte Dateien umzuwandeln, die Sie herunterladen und verwenden können.

Dieser Leitfaden erklärt, wie die Mailbox (Posteingang) funktioniert, wie Sie E-Mails von Gmail senden oder weiterleiten, was nach dem Empfang einer E-Mail passiert, Planlimits, Datenaufbewahrung, Dateitypregeln, Prioritäts-E-Mail-Support und Tipps zur Fehlerbehebung.

---

## Wie die Mailbox funktioniert

* **Posteingang (Mailbox):** Ihr Konto erhält eine eindeutige E-Mail-Adresse (eine *Mailbox*), die wie eine einmalige Adresse für Ihr Konto aussieht. Die genaue Adresse finden Sie in Ihrem Dashboard unter **Mailbox**. Kopieren Sie diese Adresse, wenn Sie E-Mails senden oder weiterleiten müssen.

---

## Schritt-für-Schritt-Anleitung

1. Öffnen Sie Gmail und klicken Sie auf **Verfassen**.  
2. Fügen Sie im Feld **An** Ihre Mailbox-Adresse ein (kopieren Sie sie aus Dashboard → Mailboxes).  
3. Fügen Sie einen **Betreff** hinzu.  
4. Geben Sie im E-Mail-Textfeld ggf. Notizen oder Anweisungen für die Verarbeitung an (optional).  
5. Fügen Sie die PDF-Kontoauszüge als Anhang bei. **Überprüfen Sie Ihre Planlimits** für maximale Anhänge (siehe Tabelle unten).  
6. Stellen Sie sicher, dass die **Gesamtgröße aller Anhänge 20 MB nicht überschreitet**.  
7. Klicken Sie auf **Senden**.  
8. Öffnen Sie Ihr Bank Statement Converter Dashboard → **Mailbox**. Die eingehende Nachricht sollte angezeigt werden.  
9. Sobald die E-Mail empfangen wird, wird sie **automatisch an den Abschnitt Statements** zur Verarbeitung weitergeleitet.  
10. Warten Sie, bis der Status **Abgeschlossen** angezeigt wird.  
11. Nach Abschluss klicken Sie auf das Element und **laden** Ihre konvertierten Dateien im **gewünschten Format** herunter.

---

## Was passiert nach dem Empfang der E-Mail

* Die Nachricht erscheint in Dashboard → **Mailbox**.  
* Status erklärt:  
  * **Warteschlange (Queued)** — wartet auf die Verarbeitung (Starter-Plan → Verarbeitungsmodus: Queue).  
  * **In Bearbeitung (Processing)** — Parsing und Konvertierung laufen.  
  * **Abgeschlossen (Completed)** — das Ergebnis steht zum Download bereit.  
  * **Fehlgeschlagen (Failed)** — Datei konnte nicht verarbeitet werden (Credits wiederhergestellt).

- Nach Eingang der E-Mail in der **Mailbox** wird sie automatisch zur **Statements**-Verarbeitung weitergeleitet.  
- Wenn die Verarbeitung **abgeschlossen** ist, können Sie Ihr gewünschtes Ausgabeformat herunterladen.

### Verfügbare Ausgabeformate:  
- **Excel**  
- **CSV**  
- **Zusammengeführte Transaktionen (Merged Transactions)**  

---

## Pläne, Limits und Verarbeitungsmodi

Wählen Sie einen Plan, der Ihrem Arbeitsaufkommen entspricht, und wechseln Sie jederzeit zu einem höheren Plan, falls Sie höhere Limits benötigen.  

:::info Wichtige Hinweise
Bitte lesen Sie die folgenden wichtigen Informationen sorgfältig.  
:::

- ⚠️ Wenn die Gesamtgröße der E-Mail mehr als **20 MB** beträgt, schlägt der Upload **fehl**.  
- ✅ Wenn ein E-Mail-Upload fehlschlägt, werden **Ihre Credits automatisch wiederhergestellt**.  
- 🔄 Sie können die Datei anschließend **innerhalb der Größenlimits erneut hochladen**.    
- 💡 Um Fehler zu vermeiden, überprüfen Sie immer die Gesamtgröße Ihrer Anhänge vor dem Senden.  
- 📌 Denken Sie daran: Das System verarbeitet Dateien entsprechend Ihrem Plan — **Queue** für Starter und **Parallel** für Pro und Business.

| Plan       | Mail-Parsing — max. Anhänge | Verarbeitungsmodus | Datenaufbewahrung |
| ---------- | --------------------------: | ----------------- | ---------------- |
| Starter    | Max. 2 Anhänge pro E-Mail   | Queue             | 30 Tage          |
| Pro        | Max. 4 Anhänge pro E-Mail   | Parallel          | 90 Tage          |
| Business   | Max. 10 Anhänge pro E-Mail  | Parallel          | 120 Tage         |

---

## Dateitypregeln

- **Starter & Pro Pläne:** Sie können nur **PDF- und Bilddateien** anhängen (PDF, JPG, PNG, BMP).  
- **Business Plan:** Sie können **PDF- und Bilddateien** anhängen (PDF, JPG, PNG, BMP).  

---

## Prioritäts-E-Mail-Support

- **Starter, Pro und Business** erhalten **Prioritäts-E-Mail-Support**, d. h. schnellere Antwortzeiten bei Fragen oder Problemen.  
- Wenn Ihr Mail-Parse-Anhang größer als **20 MB** ist oder **ungültige Dateitypen** enthält, erhalten Sie eine **sofortige Benachrichtigungs-E-Mail** von **support@bankstmtconverter.com**.  
- Wenn eine Datei **erfolgreich verarbeitet und abgeschlossen** wurde, erhalten Sie ebenfalls eine **Bestätigungs-E-Mail** mit **Statusaktualisierung**.

---

## Herunterladen des konvertierten Ergebnisses

1. Gehen Sie zu Dashboard → **Statement**, um Ihre PDFs zu sehen, die gerade verarbeitet werden.  
2. Sobald das Element als **Abgeschlossen** markiert ist, wählen Sie Ihr gewünschtes Dateiformat zum **Download** aus.

---

## Referenz

:::note
Folgen Sie den untenstehenden Screenshots für eine visuelle Anleitung.  
:::

1. Ihr Konto erhält eine **einzigartige E-Mail-Adresse**.  
![Mailbox](/img/mailboxdashboard.png)

2. Fügen Sie im Feld **An** Ihre Mailbox-Adresse ein **(kopieren Sie sie aus Mailboxes)**.  
![email template](/img/emailtemplate.png)

3. E-Mail, empfangen von der **Mailbox**  
![email template](/img/mailreceived.png)

4. Sobald die E-Mail in der **Mailbox** empfangen wird, wird sie automatisch an die **Statements** weitergeleitet.  
![statement](/img/statements.png)

:::note
Folgen Sie dem Tutorial-Video für eine Schritt-für-Schritt-Anleitung.  
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/KxluH-dPcjs?si=Sv9r5i4Keqwy4mxT" title="YouTube-Video-Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
