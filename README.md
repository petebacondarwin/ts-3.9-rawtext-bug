Run `yarn start` to see the result:

```
LATEST
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
$localize(__makeTemplateObject(["text"], ["text"]));

RC
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
$localize(__makeTemplateObject(["text"], [""]));
```

Note that in RC the "raw" text is "", rather than "text".