function showNextSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostra a próxima seção
    document.getElementById(sectionId).classList.remove('hidden');
}
