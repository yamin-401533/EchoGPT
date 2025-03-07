import React, { useState, useEffect } from "react";
import styles from "../styles/Calendar.module.css";

const GPTAssistant: React.FC = () => {
  // State management
  const [selectedTool, setSelectedTool] = useState<string>("prompts");
  const [promptCategory, setPromptCategory] = useState<string>("general");
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [savedPrompts, setSavedPrompts] = useState<string[]>([]);
  const [responseHistory, setResponseHistory] = useState<Array<{query: string, response: string}>>([]);
  const [notification, setNotification] = useState<{message: string, type: string} | null>(null);

  // Sample prompt categories and templates
  const promptTemplates = {
    general: [
      "Explain [topic] in simple terms for a beginner.",
      "What are the key advantages and disadvantages of [topic]?",
      "Compare and contrast [topic A] and [topic B]."
    ],
    business: [
      "Create a SWOT analysis for [business/product].",
      "Develop a marketing strategy for [product/service] targeting [audience].",
      "Write a professional email to [recipient] regarding [topic]."
    ],
    creative: [
      "Write a short story about [character] who [situation].",
      "Create a scene description for [setting] with emphasis on [sense/emotion].",
      "Develop a character profile for [character type] in a [genre] setting."
    ],
    technical: [
      "Explain the concept of [technical topic] with code examples.",
      "Debug this code snippet: [code] and suggest improvements.",
      "Design a system architecture for [application type]."
    ],
    academic: [
      "Outline a research paper on [topic].",
      "Create a literature review structure for [subject area].",
      "Develop a methodology section for research on [topic]."
    ]
  };

  // Function to simulate API call
  const generateResponse = () => {
    const query = customPrompt || searchQuery;
    if (!query.trim()) {
      showNotification("Please enter a prompt or query", "error");
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const sampleResponses = [
        "The concept you're asking about involves multiple interconnected factors. First, it's important to understand the fundamental principles that govern this domain. These include technical considerations, practical applications, and theoretical frameworks that have evolved over time through research and practical implementation.",
        "Based on your query, I've analyzed several approaches. The most effective solution would be to implement a structured methodology that addresses both the immediate concerns and long-term objectives. This would involve strategic planning, resource allocation, and continuous evaluation of outcomes.",
        "Your question touches on an evolving field. Recent advancements have significantly changed how we understand this topic. The current consensus among experts suggests a multidisciplinary approach that integrates traditional methods with innovative techniques developed in the last decade."
      ];
      
      const newResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      setResponse(newResponse);
      
      // Add to history
      setResponseHistory(prev => [...prev, {query, response: newResponse}]);
      
      setIsLoading(false);
    }, 1500);
  };

  // Notification handler
  const showNotification = (message: string, type: string) => {
    setNotification({message, type});
    setTimeout(() => setNotification(null), 3000);
  };

  // Handle prompt selection
  const selectPrompt = (prompt: string) => {
    setCustomPrompt(prompt);
  };

  // Handle saving prompts
  const savePrompt = () => {
    if (customPrompt && !savedPrompts.includes(customPrompt)) {
      setSavedPrompts(prev => [...prev, customPrompt]);
      showNotification("Prompt saved successfully", "success");
    }
  };

  // Clear response
  const clearResponse = () => {
    setResponse("");
    setCustomPrompt("");
    setSearchQuery("");
  };

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showNotification("Copied to clipboard", "success");
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1>GPT Assistant</h1>
        <p>Your professional AI writing and research companion</p>
      </header>

      {/* Main content */}
      <main className={styles.main}>
        {/* Tools navigation */}
        <nav className={styles.toolsNav}>
          <button 
            className={`${styles.toolButton} ${selectedTool === "prompts" ? styles.active : ""}`}
            onClick={() => setSelectedTool("prompts")}
          >
            <span className={styles.toolIcon}>📝</span>
            Prompt Templates
          </button>
          <button 
            className={`${styles.toolButton} ${selectedTool === "search" ? styles.active : ""}`}
            onClick={() => setSelectedTool("search")}
          >
            <span className={styles.toolIcon}>🔍</span>
            Knowledge Search
          </button>
          <button 
            className={`${styles.toolButton} ${selectedTool === "saved" ? styles.active : ""}`}
            onClick={() => setSelectedTool("saved")}
          >
            <span className={styles.toolIcon}>🔖</span>
            Saved Prompts
          </button>
          <button 
            className={`${styles.toolButton} ${selectedTool === "history" ? styles.active : ""}`}
            onClick={() => setSelectedTool("history")}
          >
            <span className={styles.toolIcon}>📚</span>
            Response History
          </button>
        </nav>

        {/* Tools content */}
        <div className={styles.toolContent}>
          {/* Prompt Templates */}
          {selectedTool === "prompts" && (
            <div className={styles.promptsSection}>
              <div className={styles.categorySelector}>
                {Object.keys(promptTemplates).map(category => (
                  <button 
                    key={category}
                    className={`${styles.categoryButton} ${promptCategory === category ? styles.activeCategory : ""}`}
                    onClick={() => setPromptCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className={styles.promptsList}>
                <h3>Select a template:</h3>
                {promptTemplates[promptCategory as keyof typeof promptTemplates].map((prompt, index) => (
                  <div 
                    key={index} 
                    className={styles.promptItem}
                    onClick={() => selectPrompt(prompt)}
                  >
                    <p>{prompt}</p>
                    <div className={styles.promptActions}>
                      <button 
                        className={styles.actionButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(prompt);
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Knowledge Search */}
          {selectedTool === "search" && (
            <div className={styles.searchSection}>
              <h3>Search for information</h3>
              <p>Enter a topic or question to get insights from the AI:</p>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g., What are the principles of quantum computing?"
                className={styles.searchInput}
              />
            </div>
          )}

          {/* Saved Prompts */}
          {selectedTool === "saved" && (
            <div className={styles.savedSection}>
              <h3>Your Saved Prompts</h3>
              {savedPrompts.length === 0 ? (
                <p className={styles.emptyState}>You haven't saved any prompts yet.</p>
              ) : (
                <div className={styles.savedPromptsList}>
                  {savedPrompts.map((prompt, index) => (
                    <div key={index} className={styles.savedPromptItem}>
                      <p>{prompt}</p>
                      <div className={styles.promptActions}>
                        <button 
                          className={styles.actionButton}
                          onClick={() => selectPrompt(prompt)}
                        >
                          Use
                        </button>
                        <button 
                          className={styles.actionButton}
                          onClick={() => copyToClipboard(prompt)}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Response History */}
          {selectedTool === "history" && (
            <div className={styles.historySection}>
              <h3>Response History</h3>
              {responseHistory.length === 0 ? (
                <p className={styles.emptyState}>No responses yet.</p>
              ) : (
                <div className={styles.historyList}>
                  {responseHistory.map((item, index) => (
                    <div key={index} className={styles.historyItem}>
                      <div className={styles.historyQuery}>
                        <strong>Query:</strong> {item.query}
                      </div>
                      <div className={styles.historyResponse}>
                        <strong>Response:</strong> {item.response.substring(0, 100)}...
                        <button 
                          className={styles.actionButton}
                          onClick={() => {
                            setCustomPrompt(item.query);
                            setResponse(item.response);
                          }}
                        >
                          View Full
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Prompt input section */}
        <div className={styles.promptInputSection}>
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="Enter or edit your prompt here..."
            className={styles.promptTextarea}
          />
          
          <div className={styles.promptActions}>
            <button 
              className={styles.actionButton}
              onClick={savePrompt}
              disabled={!customPrompt}
            >
              Save Prompt
            </button>
            <button 
              className={styles.actionButton}
              onClick={clearResponse}
            >
              Clear
            </button>
            <button 
              className={`${styles.generateButton} ${isLoading ? styles.loading : ""}`}
              onClick={generateResponse}
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Response"}
            </button>
          </div>
        </div>

        {/* Response section */}
        {response && (
          <div className={styles.responseSection}>
            <div className={styles.responseHeader}>
              <h3>AI Response</h3>
              <button 
                className={styles.actionButton}
                onClick={() => copyToClipboard(response)}
              >
                Copy Response
              </button>
            </div>
            <div className={styles.responseContent}>
              <p>{response}</p>
            </div>
          </div>
        )}
      </main>

      {/* Notification */}
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default GPTAssistant;
