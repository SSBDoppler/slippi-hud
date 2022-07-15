function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function runHistory() {
    let count = 0;
    while (true) {
        await sleep(1000);

        if (document.getElementById("input")) {
            // Add to input history
            var input = document.getElementById("input");
            var historyItem = document.createElement('li');
            historyItem.innerHTML = input.innerHTML
            var inputHistory = document.getElementById("inputHistory");
            inputHistory.appendChild(historyItem);
            
            // Delete last from history if full
            count++;
            if (count > 9) {
                let listItems = inputHistory.getElementsByTagName("li");
                let last = listItems[listItems.length - 1];
                last.parentNode.removeChild(last);
            }
            
        }

    
    }
}

runHistory();
