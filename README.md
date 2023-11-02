# MSW 2.0 + Safari bug repro

We see an error in Safari only when returning a response with `null` body and status 204 from a MSW handler.

```
FetchEvent.respondWith received an error: TypeError: Response cannot have a body with the given status.
```

To reproduce error:

1. `npm install`
1. `npm run dev`
1. Go to http://localhost:5173 in Safari
1. Open developer console
1. See the above error in console

This only seems to happen in Safari. Here is the WebKit code that throws this error. It looks like it should only throw if body is not null and the response code is 204. But when I log the response we're generating before the error happens (in the handler) I see that it is null.

* https://github.com/WebKit/WebKit/blob/3e8a39cebd79433c45e1c4878fd017cd39545479/Source/WebCore/Modules/fetch/FetchResponse.cpp#L93-L97
* https://opensource.apple.com/source/WebCore/WebCore-7603.3.8/Modules/fetch/FetchResponse.js.auto.html

Here is a similar issue where the MSW devs justifiably say it looks like a Safari issue and there's not really anything they can do.

* https://github.com/mswjs/msw/issues/1738
