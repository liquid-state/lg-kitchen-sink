const SEND_CUSTOM_EVENT_ON_INTERVAL = false;

function buildEventWithData(data) {
  return encodeURIComponent(
    JSON.stringify({
      request_id: "request-123",
      data
    })
  );
}

function sendCustomEvent() {
  const data = {
    tab_id: "events",
    webapp_id: "events",
    purpose: "something",
    data: {
      value: "blah"
    }
  };
  const event = buildEventWithData(data);
  console.log("Sending custom event to evetns tab/web app");
  document.location.href = `liquidstate://iwa/custom?request=${event}`;
}

function receiveMessage() {
  console.log(arguments);
  if (arguments[0]["purpose"] == "do-a-thing") {
    sendCustomEvent();
  }
}

function declareAppReady() {
  document.location.href = "liquidstate://iwa/set_ready";
  const data = {
    is_ready: true
  };
  const event = buildEventWithData(data);
  setTimeout(() => {
    document.location.href = `liquidstate://app/set_notification_presentation_status?request=${event}`;
  }, 1000);
}

function main() {
  if (SEND_CUSTOM_EVENT_ON_INTERVAL) {
    setInterval(() => {
      sendCustomEvent();
    }, 1000);
  } else {
    sendCustomEvent();
  }
  window.communicate = receiveMessage;
  declareAppReady();
}

document.addEventListener("readystatechange", event => {
  if (document.readyState == "complete") {
    main();
  }
});
