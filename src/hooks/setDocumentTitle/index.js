import { useLayoutEffect } from 'react';

export default function _setDocumentTitle(name, ...rest) {
  useLayoutEffect(() => {
    document.title = name;
  }, [name, rest]);
}
