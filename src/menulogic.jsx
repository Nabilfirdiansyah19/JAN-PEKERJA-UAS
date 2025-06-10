import { useEffect } from 'react';

export default function MenuLogic() {
  useEffect(() => {
    let selectedCharacter = null;

    const characters = document.querySelectorAll('.character');
    const startBtn = document.getElementById('startBtn');

    if (!characters.length || !startBtn) return;

    characters.forEach((el) => {
      el.addEventListener('click', () => {
        characters.forEach((e2) => e2.classList.remove('selected'));
        el.classList.add('selected');
        selectedCharacter = el.dataset.char;
      });
    });

    startBtn.addEventListener('click', () => {
      const playerName = document.getElementById('playerName')?.value;

      if (!selectedCharacter) {
        alert('Pilih karakter terlebih dahulu!');
        return;
      }

      if (!playerName) {
        alert('Masukkan nama Anda!');
        return;
      }

      window.location.href = `/game.html?character=${selectedCharacter}&player=${encodeURIComponent(playerName)}`;
    });
  }, []);

  return null;
}
