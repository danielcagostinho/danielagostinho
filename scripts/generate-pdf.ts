import { mdToPdf } from 'md-to-pdf';
import * as path from 'path';

async function generateResumePDF() {
  const markdownPath = path.join(process.cwd(), 'RESUME.md');
  const outputPath = path.join(process.cwd(), 'RESUME.pdf');

  try {
    await mdToPdf(
      { path: markdownPath },
      {
        dest: outputPath,
        pdf_options: {
          format: 'A4',
          margin: {
            top: '15mm',
            right: '15mm',
            bottom: '15mm',
            left: '15mm',
          },
          printBackground: true,
        },
        style: `
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
          }
          h1 {
            font-size: 2em;
            margin-bottom: 0.5em;
            color: #2c3e50;
          }
          h2 {
            font-size: 1.5em;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            color: #34495e;
            border-bottom: 2px solid #3498db;
            padding-bottom: 0.3em;
          }
          h3 {
            font-size: 1.2em;
            margin-top: 1em;
            margin-bottom: 0.5em;
            color: #34495e;
          }
          strong {
            color: #2c3e50;
          }
          em {
            color: #7f8c8d;
          }
          hr {
            border: none;
            border-top: 1px solid #ecf0f1;
            margin: 2em 0;
          }
          p {
            margin: 0.3em 0;
          }
          ul {
            padding-left: 1.5em;
            margin-top: 0.2em;
            margin-bottom: 0.5em;
          }
          li {
            margin-bottom: 0.3em;
          }
        `,
      }
    );
    // eslint-disable-next-line no-console
    console.log(`Resume PDF generated at: ${outputPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
}

generateResumePDF();
