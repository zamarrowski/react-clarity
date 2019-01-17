# Checkbox component

## Example

### Oncheck

```
<Checkbox onCheck={(value) => console.log(value)} label="My checkbox"/>
```

### Checked
```
<Checkbox label="My checkbox" checked/>
```

## Props

**- onCheck:**

Callback fired when the state is changed. Return a boolean if is checked or not.

**- checked:**
If true, the checkbox is checked.