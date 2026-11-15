/* ============================================================
   Lesson Study – gemeinsames Skript (in allen Ansichten aktiv)
   Hält die Moodle-Session aktiv, solange die Seite offen ist,
   damit beim längeren Bearbeiten keine automatische Abmeldung
   erfolgt. Reines Vanilla-JS, keine externen Bibliotheken.
   ============================================================ */
(function () {
    'use strict';

    // Guard: Skript darf in mehreren Templates eingebunden sein,
    // soll aber nur einmal initialisieren.
    if (window.lessonstudyKeepAlive) { return; }
    window.lessonstudyKeepAlive = true;

    if (!window.M || !M.cfg || !M.cfg.sesskey) { return; }

    let inFlight = false;

    function touchSession() {
        if (document.visibilityState !== 'visible' || inFlight) { return; }
        inFlight = true;
        fetch(M.cfg.wwwroot + '/lib/ajax/service.php?sesskey=' + encodeURIComponent(M.cfg.sesskey) + '&info=core_session_touch', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([{ index: 0, methodname: 'core_session_touch', args: {} }]),
            credentials: 'same-origin'
        }).catch(function () { /* Netzwerkfehler ignorieren */ }).finally(function () { inFlight = false; });
    }

    setInterval(touchSession, 4 * 60 * 1000);
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') { touchSession(); }
    });
}());
