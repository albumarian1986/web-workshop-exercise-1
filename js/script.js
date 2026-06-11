document.getElementById('copy-tips').addEventListener('click', async function () {
    const tips = Array.from(document.querySelectorAll('#tips-list li'))
        .map(li => li.textContent.trim())
        .join('\n');

    try {
        await navigator.clipboard.writeText('VS Code Tips:\n' + tips);
        const fb = document.getElementById('copy-feedback');
        fb.textContent = 'Copied!';
        setTimeout(() => fb.textContent = '', 2000);
    } catch (err) {
        alert('Unable to copy to clipboard');
    }
});

document.getElementById('toggle-more').addEventListener('click', function () {
    const more = document.getElementById('more-content');
    const btn = document.getElementById('toggle-more');
    if (more.style.display === 'none' || more.style.display === '') {
        more.style.display = 'block';
        btn.textContent = 'Show less';
    } else {
        more.style.display = 'none';
        btn.textContent = 'Show more';
    }
});
