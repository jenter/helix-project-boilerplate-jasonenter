/**
 * decorate block
 */
export default function decorate(block) {
  const blockElement = document.createElement("div");
  blockElement.innerHTML = block.innerHTML;

  block.textContent = "";
  block.append(blockElement);
}
