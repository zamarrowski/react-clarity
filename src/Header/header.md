# Header component

## Examples

### Header simple

```
<Header title="My Header" />
```

### Header with buttons

```
const links = [
  {text: 'Dashboard', link: '/', active: true}, 
  {text: 'Interactive Analytics', link: '/ie'}
]

<Header 
  title="My Header" 
  navLinks={links} />
```