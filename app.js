document.getElementById('itinerary-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const preferences = document.getElementById('preferences').value;
  
    
    const activities = getSuggestedActivities(preferences, destination);
  
    let itineraryHtml = `<h3>Your Itinerary for ${destination} (${startDate} - ${endDate})</h3>`;
    itineraryHtml += `<p><strong>Preferences:</strong> ${preferences}</p>`;
    itineraryHtml += "<ul>";
    activities.forEach(activity => {
      itineraryHtml += `<li>${activity}</li>`;
    });
    itineraryHtml += "</ul>";
  
 document.getElementById('itinerary-output').innerHTML = itineraryHtml;
    document.getElementById('download-btn').style.display = 'inline-block'; // Show PDF button
  });
  
 
  function getSuggestedActivities(preference, destination) {
    const activitiesMap = {
      adventure: ["Hiking in the mountains", "Bungee jumping", "Safari in Africa"],
      relaxation: ["Beachside spa day", "Yoga retreat", "Luxury resort stay"],
      food: ["Food tour", "Cooking classes", "Wine tasting"],
      history: ["Museum tour", "Historical city walking tour", "Visit ancient ruins"]
    };
    
    return activitiesMap[preference] || [];
  }
  
 
  document.getElementById('download-btn').addEventListener('click', function() {
    const doc = new jsPDF();
    doc.text(20, 20, 'Travel Itinerary');
    
    const content = document.getElementById('itinerary-output').innerText;
    doc.text(20, 40, content);
  
    doc.save('itinerary.pdf');
  });
  