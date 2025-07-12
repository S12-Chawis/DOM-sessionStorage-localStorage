const INTERACTION_KEY = 'interactionCount';

export function getInteractionCount() {
    // Retrieve the interaction count from sessionStorage, defaulting to 0 if not set
  return parseInt(sessionStorage.getItem(INTERACTION_KEY)) || 0;
}

export function incrementInteractionCount() {
  const current = getInteractionCount();
  const updated = current + 1;
  // Update the interaction count in sessionStorage
  sessionStorage.setItem(INTERACTION_KEY, updated);
  return updated;
}

export function resetInteractionCount() {
  sessionStorage.removeItem(INTERACTION_KEY);
}