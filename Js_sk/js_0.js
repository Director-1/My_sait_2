const m_0 = [100, 90, 75, 120];

var d = 0;
var d_1 = 0;
var t;
var txt;
function sa(n) {
    d = d + m_0[n];
    if (m_0[n] > 0)
    {
        d_1++
    }
    else {
        d_1--;
    }
    m_0[n] = ~m_0[n];
    m_0[n]++;
    txt = "Вы выбрали: " + d_1 + " шт.<br>" + "Общая стоймость: " + d + " руб.";
    return document.getElementById("sp_0_0").innerHTML = txt;
}
