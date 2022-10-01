import platform from 'platform';

const ANDROID = 'Android';
const IOS = 'iOS';

const PLATFORM_STORE_LIST = {
    [ANDROID]: 'https://play.google.com/store/apps',
    [IOS]: 'https://www.apple.com/ru/app-store',
}

const loader = document.getElementById('loader');
const platformNotDetected = document.getElementById('platform-not-detected');
const family = document.getElementById('family');
const debug = document.getElementById('debug');

switch (platform.os.family) {
    case ANDROID:
        loader.innerText = 'Переход в магазин приложений ...';
        window.location.href = PLATFORM_STORE_LIST[ANDROID];
        break;
    case IOS:
        loader.innerText = 'Переход в магазин приложений ...';
        window.location.href = PLATFORM_STORE_LIST[IOS];
        break;
    default:
        debug.innerText = JSON.stringify(platform);
        family.innerText = "Не удалось определить Вашу платформу. Выберите магазин приложений самостоятельно.";
        loader.style.display = 'none';
        platformNotDetected.style.display = 'block';
        break;
}
