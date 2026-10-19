import type { KeyboardEvent } from "react";

// Arrow/Home/End keyboard support for a tablist: moves selection and focus.
export function handleTabKeys<T extends string>(
  event: KeyboardEvent<HTMLElement>,
  values: T[],
  current: T,
  onChange: (value: T) => void
) {
  const index = values.indexOf(current);
  let next = index;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % values.length;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + values.length) % values.length;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = values.length - 1;
  else return;

  event.preventDefault();
  onChange(values[next]);
  const tabs = event.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]');
  tabs[next]?.focus();
}
