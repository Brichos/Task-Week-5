//Calculator
export function multiply(a,b){
    return a*b;
}

//String Formatter
export function format_name(first, last) {
  const cleanFirst = first.trim().toLowerCase();
  const cleanLast = last.trim().toLowerCase();
  
  const capitalizeFirst = cleanFirst.charAt(0).toUpperCase() + cleanFirst.slice(1);
  const capitalizeLast = cleanLast.charAt(0).toUpperCase() + cleanLast.slice(1);
  
  return `${capitalizeLast}, ${capitalizeFirst}`;
}