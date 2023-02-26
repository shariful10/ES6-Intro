document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
})

document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third');
    third.style.textAlign = 'center';
    third.style.color = 'hsl(var(--s))';
})

document.getElementById('add').addEventListener('click', function(){
    const container = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.classList.add('mb-5');
    friend.innerHTML = `
    <h3 class="friend-name text-2xl">Friend 6</h3>
    <p>Incidunt harum animi eum consequuntur!</p>
    `
    container.appendChild(friend);
})