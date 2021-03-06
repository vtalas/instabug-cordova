var exec = require('cordova/exec');

var getInvocationEvents = function () {
    return {
        shake: 'shake',
        button: 'button',
        screenshot: 'screenshot',
        swipe: 'swipe',
        none: 'none'
    };
};

var getInvocationModes = function () {
    return {
        chat: 'chat',
        chats: 'chats',
        bug: 'bug',
        feedback: 'feedback',
        options: 'options'
    };
};

var getReproStepsMode = function () {
    return {
        enabled: 'enabled',
        disabled: 'disabled',
        enabledWithNoScreenshots: 'enabledWithNoScreenshots'
    };
};

var getWelcomeMessageMode = function () {
    return {
        welcomeMessageModeLive: 'welcomeMessageModeLive',
        welcomeMessageModeBeta: 'welcomeMessageModeBeta',
        welcomeMessageModeDisabled: 'welcomeMessageModeDisabled'
    };
};

var getExtendedBugReportMode = function () {
    return {
        enabledWithRequiredFields: 'enabledWithRequiredFields',
        enabledWithOptionalFields: 'enabledWithOptionalFields',
        disabled: 'disabled'
    };
};

var getLocales = function () {
    return {
        arabic: 'arabic',
        chineseSimplified: 'chineseSimplified',
        chineseTraditional: 'chineseTraditional',
        english: 'english',
        french: 'french',
        german: 'german',
        italian: 'italian',
        japanese: 'japanese',
        korean: 'korean',
        polish: 'polish',
        portugueseBrazil: 'portugueseBrazil',
        russian: 'russian',
        spanish: 'spanish',
        swedish: 'swedish',
        turkish: 'turkish',
        czech: 'czech'
    };
};

var Instabug = function () {
};

Instabug.activate = function (token, event, options, success, error) {
    var validatedEvent = getInvocationEvents()[event];

    if (validatedEvent) {
        exec(success, error, 'IBGPlugin', 'activate', [token, event, options]);
    } else {
        console.log('Could not activate Instabug - invocation event "' + event + '" is not valid.');
    }
};

Instabug.invoke = function (mode, success, error) {
    var validatedMode = getInvocationModes()[mode];

    if (validatedMode) {
        exec(success, error, 'IBGPlugin', 'invoke', [validatedMode]);
    } else {
        exec(success, error, 'IBGPlugin', 'invoke', []);
        console.log('Could not apply mode to invocation - "' + mode + '" is not valid.');
    }
};

Instabug.showIntro = function (success, error) {
    exec(success, error, 'IBGPlugin', 'showIntroDialog', []);
};

Instabug.setPrimaryColor = function (colorInteger, success, error) {
    exec(success, error, 'IBGPlugin', 'setPrimaryColor', [colorInteger]);
};

Instabug.setViewHierarchyEnabled = function (enabled, success, error) {
    exec(success, error, 'IBGPlugin', 'setViewHierarchyEnabled', [enabled]);
};

Instabug.setAutoScreenRecordingEnabled = function (enabled, success, error) {
    exec(success, error, 'IBGPlugin', 'setAutoScreenRecordingEnabled', [enabled]);
};

Instabug.setAutoScreenRecordingMaxDuration = function (duration, success, error) {
    exec(success, error, 'IBGPlugin', 'setAutoScreenRecordingMaxDuration', [duration]);
};

Instabug.setUserEmail = function (email, success, error) {
    exec(success, error, 'IBGPlugin', 'setUserEmail', [email]);
};

Instabug.setUserName = function (name, success, error) {
    exec(success, error, 'IBGPlugin', 'setUserName', [name]);
};

Instabug.showSurveyWithToken = function (surveyToken, success, error) {
    exec(success, error, 'IBGPlugin', 'showSurveyWithToken', [surveyToken]);
};

Instabug.setReproStepsMode = function (reproStepsMode, success, error) {

  var validatedReproStepsMode = getReproStepsMode()[reproStepsMode];

  if (validatedReproStepsMode) {
      exec(success, error, 'IBGPlugin', 'setReproStepsMode', [validatedReproStepsMode]);
  } else {
      console.log('Could not set user steps mode - "' + validatedReproStepsMode + '" is not valid.');
  }
};

Instabug.showWelcomeMessage = function (welcomeMessageMode, success, error) {

    var validatedWelcomeMessageMode = getWelcomeMessageMode()[welcomeMessageMode];
  
    if (validatedWelcomeMessageMode) {
        exec(success, error, 'IBGPlugin', 'showWelcomeMessage', [validatedWelcomeMessageMode]);
    } else {
        console.log('Could not set welcome message mode - "' + validatedWelcomeMessageMode + '" is not valid.');
    }
  };

Instabug.setExtendedBugReportMode = function (extendedBugReportMode, success, error) {

  var validatedExtendedBugReportMode = getExtendedBugReportMode()[extendedBugReportMode];

  if (validatedExtendedBugReportMode) {
      exec(success, error, 'IBGPlugin', 'setExtendedBugReportMode', [validatedExtendedBugReportMode]);
  } else {
      console.log('Could not set extended bug report mode - "' + validatedExtendedBugReportMode + '" is not valid.');
  }
};

Instabug.setUserData = function (data, success, error) {
    exec(success, error, 'IBGPlugin', 'setUserData', [data]);
};

Instabug.addFile = function (filePath, success, error) {
    exec(success, error, 'IBGPlugin', 'addFile', [filePath]);
}

Instabug.addLog = function (content, success, error) {
    exec(success, error, 'IBGPlugin', 'addLog', [content]);
};

Instabug.clearLog = function (success, error) {
    exec(success, error, 'IBGPlugin', 'clearLog', []);
};

Instabug.changeInvocationEvent = function (event, success, error) {
    var validatedEvent = getInvocationEvents()[event];

    if (validatedEvent) {
        exec(success, error, 'IBGPlugin', 'changeInvocationEvent', [validatedEvent]);
    } else {
        console.log('Could not change invocation event - "' + event + '" is not valid.');
    }
};

Instabug.disable = function (success, error) {
    exec(success, error, 'IBGPlugin', 'disable', []);
};

Instabug.enable = function (success, error) {
    exec(success, error, 'IBGPlugin', 'enable', []);
};

Instabug.isEnabled = function (success, error) {
    exec(success, error, 'IBGPlugin', 'isEnabled', []);
};

Instabug.setUserAttribute = function (key, value, success, error) {
    exec(success, error, 'IBGPlugin', 'setUserAttribute', [key, value]);
};

Instabug.removeUserAttribute = function (key, success, error) {
    exec(success, error, 'IBGPlugin', 'removeUserAttribute', [key]);
};

Instabug.getAllUserAttributes = function (success, error) {
    exec(success, error, 'IBGPlugin', 'getAllUserAttributes', []);
};

Instabug.getUserAttribute = function (key, success, error) {
    exec(success, error, 'IBGPlugin', 'getUserAttribute', [key]);
};

Instabug.hasRespondedToSurveyWithToken = function (surveyToken, success, error) {
    exec(success, error, 'IBGPlugin', 'hasRespondedToSurveyWithToken', [surveyToken]);
};

Instabug.identifyUserWithEmail = function (email, name, success, error) {
    exec(success, error, 'IBGPlugin', 'identifyUserWithEmail', [email, name]);
};

Instabug.setVideoRecordingFloatingButtonPosition = function (position, success, error) {
    exec(success, error, 'IBGPlugin', 'setVideoRecordingFloatingButtonPosition', [position]);
};

Instabug.logOut = function (success, error) {
    exec(success, error, 'IBGPlugin', 'logOut', []);
};

Instabug.setDebugEnabled = function (isDebugEnabled, success, error) {
    exec(success, error, 'IBGPlugin', 'setDebugEnabled', [isDebugEnabled]);
    if(success) {
        console.log("setting debug enabled to " + isDebugEnabled);
    } else if(error) {
        console.log("setting debug enabled not successful");
    }
};

Instabug.setLocale = function (locale, success, error) {
    var validatedLocale = getLocales()[locale];

    if (validatedLocale) {
        exec(success, error, 'IBGPlugin', 'setLocale', [validatedLocale]);
    } else {
        console.log('Could not set locale - "' + locale + '" is not valid.');
    }
};

Instabug.setThresholdForReshowingSurveyAfterDismiss = function (sessionsCount, daysCount, success, error) {
    exec(success, error, 'IBGPlugin', 'setThresholdForReshowingSurveyAfterDismiss', [sessionsCount, daysCount]);
};

Instabug.setAutoShowingSurveysEnabled = function (autoShowingSurveysEnabled, success, error) {
    exec(success, error, 'IBGPlugin', 'setAutoShowingSurveysEnabled', [autoShowingSurveysEnabled]);
};

Instabug.showFeatureRequests = function (success, error) {
    exec(success, error, 'IBGPlugin', 'showFeatureRequests', []);
};

Instabug.setShouldShowSurveysWelcomeScreen = function (shouldShowWelcomeScreen, success, error) {
    exec(success, error, 'IBGPlugin', 'setShouldShowSurveysWelcomeScreen', [shouldShowWelcomeScreen]);
};

module.exports = Instabug;
