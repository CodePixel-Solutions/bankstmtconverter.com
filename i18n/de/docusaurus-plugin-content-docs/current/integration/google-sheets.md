---
id: google-sheets
title: Google Sheets
---

## 📊 Datenexport zu Google Sheets

Die Informationen, die Sie aus Bestellbestätigungen, Buchungs-E-Mails oder Website-Formularen erhalten, müssen oft in Finanzberichte oder Abrechnungen organisiert werden.  
Anstatt dies manuell zu erledigen, ermöglicht **Bank Statement Converter**, Ihre **verarbeiteten Daten automatisch nach Google Sheets zu exportieren**, wodurch es schneller und einfacher wird, Ihre Aufzeichnungen aktuell zu halten.

---

# Verwendung einer speziellen Google Sheets-Formel

Nachdem Sie Ihre **Mailbox** erstellt haben, können Sie verarbeitete Daten in Google Sheets einfügen, indem Sie die **spezielle Formel** (verfügbar auf der **Integrationsseite**) kopieren und in eine beliebige Zelle Ihres Sheets einfügen.  

![webhook](/img/googlesheets.png)

- Google Sheets aktualisiert die Daten automatisch etwa **einmal pro Stunde**.  
- Um die Daten sofort zu aktualisieren, löschen Sie die Formel aus der Zelle und verwenden Sie dann **Rückgängig** — dies erzwingt eine Aktualisierung.  
- Sie können jederzeit die **Reihenfolge Ihrer Daten-Spalten** auf der **Felder**-Seite anpassen.  

Sobald die Mailbox und die Auto-Forwarding-Regeln eingerichtet sind, können Sie Ihre verarbeiteten Daten schnell mit dieser Formel in Google Sheets abrufen.

---

## 🔎 Schritte zur Verwendung der Google Sheets-Formel

1. **Formel kopieren** (Beispiel)
   ```text
   =url('https://bankstmtconverter.com')

2. **Google Sheet erstellen oder öffnen**

- Gehen Sie zu [Google Sheets](https://sheets.google.com).  
- Öffnen Sie eine vorhandene Tabelle oder erstellen Sie eine neue.

3. **Formel in eine beliebige Zelle einfügen**

- Wählen Sie eine Zelle aus und fügen Sie die kopierte Formel ein.  
- Die Daten werden automatisch in Ihr Spreadsheet eingefügt.

4. **Referenz**

- Folgen Sie dem obigen Screenshot für eine visuelle Anleitung.

5. **Google Sheets über Integration öffnen**

- Öffnen Sie [Google Sheets](https://sheets.google.com) in Ihrem Browser und erstellen Sie entweder ein neues Spreadsheet oder öffnen Sie ein vorhandenes.

6. **Dokument suchen und auswählen**

- Finden Sie das Dokument, aus dem Sie Daten importieren möchten, und wählen Sie es aus.

7. **Dokumentenformel generieren & in die Zwischenablage kopieren**

- Eine eindeutige Formel für das ausgewählte Dokument wird automatisch erstellt.  
- Kopieren Sie die generierte Formel in Ihre Zwischenablage.

8. **Formel in Google Sheets einfügen**

- Gehen Sie zu Ihrem Spreadsheet, wählen Sie eine Zelle aus und fügen Sie die Formel in eine beliebige Zelle ein.  
- Die Daten aus Ihrem Dokument werden dann automatisch in das Sheet eingefügt.

- Folgen Sie dem Video für eine Schritt-für-Schritt-Anleitung:

<iframe width="560" height="315" src="https://www.youtube.com/embed/jxXozbTSVJw?si=Ew4WdBF5_DzKA3c8" title="YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
