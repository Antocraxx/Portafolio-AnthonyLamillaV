import React from "react";

function Footer() {
  return (
    <div className="cont-footer">
      <a href="">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NA0KCUM1MTIsMjguNzA0LDQ4My4yOTYsMCw0NDgsMHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDMyLDI1NmgtODB2LTY0YzAtMTcuNjY0LDE0LjMzNi0xNiwzMi0xNmgzMlY5NmgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2NjRoLTY0djgwaDY0DQoJdjE3Nmg5NlYzMzZoNDhMNDMyLDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
      </a>
      <a href="">
        <img src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0xLjk4MiAtMS44NDQgMCAtMTMyLjUyMiAtNTEuMDc3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMzcuMTA2IiB4Mj0iLTI2LjU1NSIgeTE9Ii03Mi43MDUiIHkyPSItODQuMDQ3Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZDUiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjZmY1NDNlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgzN2FiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtMS41IDEuNjMzYy0xLjg4NiAxLjk1OS0xLjUgNC4wNC0xLjUgMTAuMzYyIDAgNS4yNS0uOTE2IDEwLjUxMyAzLjg3OCAxMS43NTIgMS40OTcuMzg1IDE0Ljc2MS4zODUgMTYuMjU2LS4wMDIgMS45OTYtLjUxNSAzLjYyLTIuMTM0IDMuODQyLTQuOTU3LjAzMS0uMzk0LjAzMS0xMy4xODUtLjAwMS0xMy41ODctLjIzNi0zLjAwNy0yLjA4Ny00Ljc0LTQuNTI2LTUuMDkxLS41NTktLjA4MS0uNjcxLS4xMDUtMy41MzktLjExLTEwLjE3My4wMDUtMTIuNDAzLS40NDgtMTQuNDEgMS42MzN6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIvPjxwYXRoIGQ9Im0xMS45OTggMy4xMzljLTMuNjMxIDAtNy4wNzktLjMyMy04LjM5NiAzLjA1Ny0uNTQ0IDEuMzk2LS40NjUgMy4yMDktLjQ2NSA1LjgwNSAwIDIuMjc4LS4wNzMgNC40MTkuNDY1IDUuODA0IDEuMzE0IDMuMzgyIDQuNzkgMy4wNTggOC4zOTQgMy4wNTggMy40NzcgMCA3LjA2Mi4zNjIgOC4zOTUtMy4wNTguNTQ1LTEuNDEuNDY1LTMuMTk2LjQ2NS01LjgwNCAwLTMuNDYyLjE5MS01LjY5Ny0xLjQ4OC03LjM3NS0xLjctMS43LTMuOTk5LTEuNDg3LTcuMzc0LTEuNDg3em0tLjc5NCAxLjU5N2M3LjU3NC0uMDEyIDguNTM4LS44NTQgOC4wMDYgMTAuODQzLS4xODkgNC4xMzctMy4zMzkgMy42ODMtNy4yMTEgMy42ODMtNy4wNiAwLTcuMjYzLS4yMDItNy4yNjMtNy4yNjUgMC03LjE0NS41Ni03LjI1NyA2LjQ2OC03LjI2M3ptNS41MjQgMS40NzFjLS41ODcgMC0xLjA2My40NzYtMS4wNjMgMS4wNjNzLjQ3NiAxLjA2MyAxLjA2MyAxLjA2MyAxLjA2My0uNDc2IDEuMDYzLTEuMDYzLS40NzYtMS4wNjMtMS4wNjMtMS4wNjN6bS00LjczIDEuMjQzYy0yLjUxMyAwLTQuNTUgMi4wMzgtNC41NSA0LjU1MXMyLjAzNyA0LjU1IDQuNTUgNC41NSA0LjU0OS0yLjAzNyA0LjU0OS00LjU1LTIuMDM2LTQuNTUxLTQuNTQ5LTQuNTUxem0wIDEuNTk3YzMuOTA1IDAgMy45MSA1LjkwOCAwIDUuOTA4LTMuOTA0IDAtMy45MS01LjkwOCAwLTUuOTA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" />
      </a>
      <a href="">
        <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItMSAwIDUxMiA1MTIiIHdpZHRoPSI1MTJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTAuODk0NTMxIDUxMmMtMi44NzUgMC01LjY3MTg3NS0xLjEzNjcxOS03Ljc0NjA5My0zLjIzNDM3NS0yLjczNDM3Ni0yLjc2NTYyNS0zLjc4OTA2My02Ljc4MTI1LTIuNzYxNzE5LTEwLjUzNTE1NmwzMy4yODUxNTYtMTIxLjU0Njg3NWMtMjAuNzIyNjU2LTM3LjQ3MjY1Ni0zMS42NDg0MzctNzkuODYzMjgyLTMxLjYzMjgxMy0xMjIuODk0NTMyLjA1ODU5NC0xMzkuOTQxNDA2IDExMy45NDE0MDctMjUzLjc4OTA2MiAyNTMuODcxMDk0LTI1My43ODkwNjIgNjcuODcxMDk0LjAyNzM0MzggMTMxLjY0NDUzMiAyNi40NjQ4NDQgMTc5LjU3ODEyNSA3NC40MzM1OTQgNDcuOTI1NzgxIDQ3Ljk3MjY1NiA3NC4zMDg1OTQgMTExLjc0MjE4NyA3NC4yODkwNjMgMTc5LjU1ODU5NC0uMDYyNSAxMzkuOTQ1MzEyLTExMy45NDUzMTMgMjUzLjgwMDc4MS0yNTMuODY3MTg4IDI1My44MDA3ODEgMCAwLS4xMDU0NjggMC0uMTA5Mzc1IDAtNDAuODcxMDkzLS4wMTU2MjUtODEuMzkwNjI1LTkuOTc2NTYzLTExNy40Njg3NS0yOC44NDM3NWwtMTI0LjY3NTc4MSAzMi42OTUzMTJjLS45MTQwNjIuMjM4MjgxLTEuODQzNzUuMzU1NDY5LTIuNzYxNzE5LjM1NTQ2OXptMCAwIiBmaWxsPSIjZTVlNWU1Ii8+PHBhdGggZD0ibTEwLjg5NDUzMSA1MDEuMTA1NDY5IDM0LjQ2ODc1LTEyNS44NzEwOTRjLTIxLjI2MTcxOS0zNi44Mzk4NDQtMzIuNDQ1MzEyLTc4LjYyODkwNi0zMi40Mjk2ODctMTIxLjQ0MTQwNi4wNTQ2ODctMTMzLjkzMzU5NCAxMDkuMDQ2ODc1LTI0Mi44OTg0MzggMjQyLjk3NjU2Mi0yNDIuODk4NDM4IDY0Ljk5MjE4OC4wMjczNDQgMTI1Ljk5NjA5NCAyNS4zMjQyMTkgMTcxLjg3MTA5NCA3MS4yMzgyODEgNDUuODcxMDk0IDQ1LjkxNDA2MyA3MS4xMjUgMTA2Ljk0NTMxMyA3MS4xMDE1NjIgMTcxLjg1NTQ2OS0uMDU4NTkzIDEzMy45Mjk2ODgtMTA5LjA2NjQwNiAyNDIuOTEwMTU3LTI0Mi45NzI2NTYgMjQyLjkxMDE1Ny0uMDA3ODEyIDAgLjAwMzkwNiAwIDAgMGgtLjEwNTQ2OGMtNDAuNjY0MDYzLS4wMTU2MjYtODAuNjE3MTg4LTEwLjIxNDg0NC0xMTYuMTA1NDY5LTI5LjU3MDMxM3ptMTM0Ljc2OTUzMS03Ny43NSA3LjM3ODkwNyA0LjM3MTA5M2MzMSAxOC4zOTg0MzggNjYuNTQyOTY5IDI4LjEyODkwNyAxMDIuNzg5MDYyIDI4LjE0ODQzOGguMDc4MTI1YzExMS4zMDQ2ODggMCAyMDEuODk4NDM4LTkwLjU3ODEyNSAyMDEuOTQ1MzEzLTIwMS45MDIzNDQuMDE5NTMxLTUzLjk0OTIxOC0yMC45NjQ4NDQtMTA0LjY3OTY4Ny01OS4wOTM3NS0xNDIuODM5ODQ0LTM4LjEzMjgxMy0zOC4xNjAxNTYtODguODMyMDMxLTU5LjE4NzUtMTQyLjc3NzM0NC01OS4yMTA5MzctMTExLjM5NDUzMSAwLTIwMS45ODQzNzUgOTAuNTY2NDA2LTIwMi4wMjczNDQgMjAxLjg4NjcxOS0uMDE1NjI1IDM4LjE0ODQzNyAxMC42NTYyNSA3NS4yOTY4NzUgMzAuODc1IDEwNy40NDUzMTJsNC44MDQ2ODggNy42NDA2MjUtMjAuNDA2MjUgNzQuNXptMCAwIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTE5LjM0Mzc1IDQ5Mi42MjUgMzMuMjc3MzQ0LTEyMS41MTk1MzFjLTIwLjUzMTI1LTM1LjU2MjUtMzEuMzI0MjE5LTc1LjkxMDE1Ny0zMS4zMTI1LTExNy4yMzQzNzUuMDUwNzgxLTEyOS4yOTY4NzUgMTA1LjI3MzQzNy0yMzQuNDg4MjgyIDIzNC41NTg1OTQtMjM0LjQ4ODI4MiA2Mi43NS4wMjczNDQgMTIxLjY0NDUzMSAyNC40NDkyMTkgMTY1LjkyMTg3NCA2OC43NzM0MzggNDQuMjg5MDYzIDQ0LjMyNDIxOSA2OC42NjQwNjMgMTAzLjI0MjE4OCA2OC42NDA2MjYgMTY1Ljg5ODQzOC0uMDU0Njg4IDEyOS4zMDA3ODEtMTA1LjI4MTI1IDIzNC41MDM5MDYtMjM0LjU1MDc4MiAyMzQuNTAzOTA2LS4wMTE3MTggMCAuMDAzOTA2IDAgMCAwaC0uMTA1NDY4Yy0zOS4yNTM5MDctLjAxNTYyNS03Ny44MjgxMjYtOS44NjcxODgtMTEyLjA4NTkzOC0yOC41MzkwNjN6bTAgMCIgZmlsbD0iIzY0YjE2MSIvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0xMC44OTQ1MzEgNTAxLjEwNTQ2OSAzNC40Njg3NS0xMjUuODcxMDk0Yy0yMS4yNjE3MTktMzYuODM5ODQ0LTMyLjQ0NTMxMi03OC42Mjg5MDYtMzIuNDI5Njg3LTEyMS40NDE0MDYuMDU0Njg3LTEzMy45MzM1OTQgMTA5LjA0Njg3NS0yNDIuODk4NDM4IDI0Mi45NzY1NjItMjQyLjg5ODQzOCA2NC45OTIxODguMDI3MzQ0IDEyNS45OTYwOTQgMjUuMzI0MjE5IDE3MS44NzEwOTQgNzEuMjM4MjgxIDQ1Ljg3MTA5NCA0NS45MTQwNjMgNzEuMTI1IDEwNi45NDUzMTMgNzEuMTAxNTYyIDE3MS44NTU0NjktLjA1ODU5MyAxMzMuOTI5Njg4LTEwOS4wNjY0MDYgMjQyLjkxMDE1Ny0yNDIuOTcyNjU2IDI0Mi45MTAxNTctLjAwNzgxMiAwIC4wMDM5MDYgMCAwIDBoLS4xMDU0NjhjLTQwLjY2NDA2My0uMDE1NjI2LTgwLjYxNzE4OC0xMC4yMTQ4NDQtMTE2LjEwNTQ2OS0yOS41NzAzMTN6bTEzNC43Njk1MzEtNzcuNzUgNy4zNzg5MDcgNC4zNzEwOTNjMzEgMTguMzk4NDM4IDY2LjU0Mjk2OSAyOC4xMjg5MDcgMTAyLjc4OTA2MiAyOC4xNDg0MzhoLjA3ODEyNWMxMTEuMzA0Njg4IDAgMjAxLjg5ODQzOC05MC41NzgxMjUgMjAxLjk0NTMxMy0yMDEuOTAyMzQ0LjAxOTUzMS01My45NDkyMTgtMjAuOTY0ODQ0LTEwNC42Nzk2ODctNTkuMDkzNzUtMTQyLjgzOTg0NC0zOC4xMzI4MTMtMzguMTYwMTU2LTg4LjgzMjAzMS01OS4xODc1LTE0Mi43NzczNDQtNTkuMjEwOTM3LTExMS4zOTQ1MzEgMC0yMDEuOTg0Mzc1IDkwLjU2NjQwNi0yMDIuMDI3MzQ0IDIwMS44ODY3MTktLjAxNTYyNSAzOC4xNDg0MzcgMTAuNjU2MjUgNzUuMjk2ODc1IDMwLjg3NSAxMDcuNDQ1MzEybDQuODA0Njg4IDcuNjQwNjI1LTIwLjQwNjI1IDc0LjV6bTAgMCIvPjxwYXRoIGQ9Im0xOTUuMTgzNTk0IDE1Mi4yNDYwOTRjLTQuNTQ2ODc1LTEwLjEwOTM3NS05LjMzNTkzOC0xMC4zMTI1LTEzLjY2NDA2My0xMC40ODgyODItMy41MzkwNjItLjE1MjM0My03LjU4OTg0My0uMTQ0NTMxLTExLjYzMjgxMi0uMTQ0NTMxLTQuMDQ2ODc1IDAtMTAuNjI1IDEuNTIzNDM4LTE2LjE4NzUgNy41OTc2NTctNS41NjY0MDcgNi4wNzQyMTgtMjEuMjUzOTA3IDIwLjc2MTcxOC0yMS4yNTM5MDcgNTAuNjMyODEyIDAgMjkuODc1IDIxLjc1NzgxMyA1OC43MzgyODEgMjQuNzkyOTY5IDYyLjc5Mjk2OSAzLjAzNTE1NyA0LjA1MDc4MSA0MiA2Ny4zMDg1OTMgMTAzLjcwNzAzMSA5MS42NDQ1MzEgNTEuMjg1MTU3IDIwLjIyNjU2MiA2MS43MTg3NSAxNi4yMDMxMjUgNzIuODUxNTYzIDE1LjE5MTQwNiAxMS4xMzI4MTMtMS4wMTE3MTggMzUuOTE3OTY5LTE0LjY4NzUgNDAuOTc2NTYzLTI4Ljg2MzI4MSA1LjA2MjUtMTQuMTc1NzgxIDUuMDYyNS0yNi4zMjQyMTkgMy41NDI5NjgtMjguODY3MTg3LTEuNTE5NTMxLTIuNTI3MzQ0LTUuNTY2NDA2LTQuMDQ2ODc2LTExLjYzNjcxOC03LjA4MjAzMi02LjA3MDMxMy0zLjAzNTE1Ni0zNS45MTc5NjktMTcuNzI2NTYyLTQxLjQ4NDM3Ni0xOS43NS01LjU2NjQwNi0yLjAyNzM0NC05LjYxMzI4MS0zLjAzNTE1Ni0xMy42NjAxNTYgMy4wNDI5NjktNC4wNTA3ODEgNi4wNzAzMTMtMTUuNjc1NzgxIDE5Ljc0MjE4Ny0xOS4yMTg3NSAyMy43ODkwNjMtMy41NDI5NjggNC4wNTg1OTMtNy4wODU5MzcgNC41NjY0MDYtMTMuMTU2MjUgMS41MjczNDMtNi4wNzAzMTItMy4wNDI5NjktMjUuNjI1LTkuNDQ5MjE5LTQ4LjgyMDMxMi0zMC4xMzI4MTItMTguMDQ2ODc1LTE2LjA4OTg0NC0zMC4yMzQzNzUtMzUuOTY0ODQ0LTMzLjc3NzM0NC00Mi4wNDI5NjktMy41MzkwNjItNi4wNzAzMTItLjA1ODU5NC05LjA3MDMxMiAyLjY2Nzk2OS0xMi4zODY3MTkgNC45MTAxNTYtNS45NzI2NTYgMTMuMTQ4NDM3LTE2LjcxMDkzNyAxNS4xNzE4NzUtMjAuNzU3ODEyIDIuMDIzNDM3LTQuMDU0Njg4IDEuMDExNzE4LTcuNTk3NjU3LS41MDM5MDYtMTAuNjM2NzE5LTEuNTE5NTMyLTMuMDM1MTU2LTEzLjMyMDMxMy0zMy4wNTg1OTQtMTguNzE0ODQ0LTQ1LjA2NjQwNnptMCAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+" />
      </a>

      <h3>Anthony Lamilla Vera</h3>
    </div>
  );
}

export default Footer;
