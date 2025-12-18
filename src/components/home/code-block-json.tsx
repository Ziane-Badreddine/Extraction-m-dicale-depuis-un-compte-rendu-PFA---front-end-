"use client";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";
const code = [
  {
    language: "json",
    filename: "pdf.json",
    code: `{
  "patient": { // [!code highlight]
    "name": "Ahmed El Amrani"
  },
  "date": "2025-09-12", // [!code highlight]
  "diagnosis": "Hypertension artérielle", // [!code highlight]
  "prescription": [ // [!code highlight]
    {
      "drug": "Amlodipine",
      "dosage": "5mg",
      "frequency": "1 fois par jour"
    }
  ],
  "observation": "Tension stable, suivi recommandé" // [!code highlight]
}`,
  },
];

export default function CodeBlockJson() {
  return (
    <CodeBlock data={code} defaultValue={code[0].language}>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent
              themes={{
                light: "vitesse-light",
                dark: "vitesse-dark",
              }}
              language={item.language as BundledLanguage}
            >
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
}
