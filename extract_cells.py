import json

with open("ML STOCK PRICE.ipynb", encoding="utf-8") as f:
    nb = json.load(f)

for i in [27, 28, 29]:
    cell = nb["cells"][i]
    if cell["cell_type"] == "code":
        source = "".join(cell["source"])
        print(f"=== Cell {i} (FULL) ===")
        print(source)
        print()
        # Also print outputs
        for output in cell.get("outputs", []):
            if output.get("output_type") == "stream":
                print("--- OUTPUT ---")
                print("".join(output.get("text", [])))
