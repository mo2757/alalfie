document.getElementById('add-project-btn').addEventListener('click', function() {
    const name = prompt('أدخل اسم المشروع:');
    if (!name) return;
    const description = prompt('أدخل وصف المشروع:');
    if (!description) return;
    const link = prompt('أدخل رابط المشروع (اتركه فارغاً إذا لم يكن هناك رابط):');

    const projectsGrid = document.getElementById('projects-grid');
    const newProject = document.createElement('div');
    newProject.className = 'bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition';
    newProject.innerHTML = `
        <div class="h-48 bg-slate-700 flex items-center justify-center font-mono text-slate-500">[صورة المشروع]</div>
        <div class="p-6">
            <h3 class="text-xl font-bold mb-2">${name}</h3>
            <p class="text-slate-400 text-sm mb-4">${description}</p>
            ${link ? `<a href="${link}" class="text-blue-400 hover:underline">عرض المشروع &larr;</a>` : ''}
        </div>
    `;
    projectsGrid.appendChild(newProject);
});
