# 💌 Dearly: Locked Personal Letters

A sophisticated, high-interaction Next.js component for sharing private messages. Instead of traditional passwords, letters are protected by **shared memories**—recipients must answer a personal question to decrypt and read their message.

## ✨ Features

* **Memory-Gated Access:** Letters are locked behind unique questions that only the recipient would know the answer to.
* **Immersive UX:** Powered by `framer-motion` for fluid transitions and `TiltedCard` for high-end 3D interactions.
* **Bento-style Grid:** A clean, responsive layout showcasing letter "vaults."
* **Micro-interactions:** * Haptic-like spring animations on modal entry.
    * Dynamic color themes per recipient.
    * Glassmorphism overlays and backdrop blurs.

## 🛠️ Technical Implementation

### Key Components
* **`PersonalLetters`**: The main container managing the selection state, answer verification, and unlock logic.
* **`TiltedCard`**: A custom 3D hover component that reveals the "Locked Vault" status.
* **`AnimatePresence`**: Used to orchestrate the entrance and exit of the decryption modal.

### State Management
The app uses local React state to handle the verification flow:
* `selectedLetter`: Tracks which vault is currently being accessed.
* `isUnlocked`: A boolean toggle that triggers the transition from "Challenge Mode" to "Read Mode."
* `userAnswer`: Captures the input to compare against the hardcoded `answer` key in the `letters` object.

---

## 🚀 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/dearly-letters.git](https://github.com/your-username/dearly-letters.git)
    ```

2.  **Install dependencies:**
    This project requires `framer-motion`:
    ```bash
    npm install framer-motion
    ```

3.  **Required Components:**
    Ensure you have the `TiltedCard` component located in `@/components/TiltedCard`.

4.  **Configuration:**
    Update the `letters` array in `PersonalLetters.tsx` with your own content:
    ```typescript
    { 
      id: 1, 
      name: "Name", 
      question: "The Secret Question?", 
      answer: "blue", // Case-insensitive
      letter: "Your long-form message here...",
      color: "#3291B6" 
    }
    ```

---

## 🎨 UI Architecture

The UI follows a "Dark Mode" aesthetic with high-contrast gradients:
* **Locked State:** Uses grayscale filters and lock icons to signify restricted access.
* **Unlocked State:** Transitions to full color, revealing the recipient's image and a serif-styled typography for the letter content.

## 🛡️ Security Note

> **Note:** This application uses **client-side verification**. It is designed for sentimental value and fun, not for storing sensitive legal or financial data. The "encryption" is a UI-state barrier; the letter content exists in the client-side JavaScript bundle.

---

**Made with ❤️ for those who matter most.**