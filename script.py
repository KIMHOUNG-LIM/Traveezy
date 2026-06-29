#!/usr/bin/env python3
"""
Generates the folder/file structure for a feature-based static website front end.
Run this script from your project root directory.
"""

import os

# Top-level HTML pages
HTML_PAGES = ["home", "destinations", "food", "hotels", "about"]

# Feature folders (each gets its own .js and .css named after the folder)
FEATURES = ["home", "destinations", "food", "hotels", "about-us"]

# Component folders (each gets its own .js and .css named after the folder)
COMPONENTS = ["navbar", "footer", "email-subscription"]

# Page-based subfolders, reused under both images/ and fonts/
PAGE_SUBFOLDERS = ["home", "destinations", "food", "hotels", "about-us", "shared"]

# Top-level asset folders (images and fonts get page subfolders, others don't)
ASSET_FOLDERS = ["icons", "logo", "videos"]

# Shared files (filename: content)
SHARED_FILES = {
    "global.css": "/* Global styles */\n",
    "variables.css": ":root {\n  /* CSS variables */\n}\n",
    "responsive.css": "/* Responsive breakpoints */\n",
    "main.js": "// Main entry JS\n",
    "utils.js": "// Shared utility functions\n",
}

# Services
SERVICES_FILES = {
    "bravo-api.js": "// Bravo API service wrapper\n",
}


def write_file(path, content=""):
    """Create a file with optional starter content, skipping if it already exists."""
    if os.path.exists(path):
        print(f"  SKIP (exists): {path}")
        return
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  CREATED: {path}")


def make_dir(path):
    os.makedirs(path, exist_ok=True)
    print(f"  DIR: {path}")


def html_boilerplate(name):
    title = name.replace("-", " ").title()
    feature_name = "about-us" if name == "about" else name
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>

  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles (loaded after Bootstrap so they can override it) -->
  <link rel="stylesheet" href="shared/variables.css">
  <link rel="stylesheet" href="shared/global.css">
  <link rel="stylesheet" href="features/{feature_name}/{feature_name}.css">
</head>
<body>
  <!-- {title} page content -->

  <!-- Bootstrap 5 JS Bundle (includes Popper) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

  <script src="shared/main.js"></script>
  <script src="features/{feature_name}/{feature_name}.js"></script>
</body>
</html>
"""


def main():
    # 1. Top-level HTML pages
    print("\n[HTML pages]")
    for page in HTML_PAGES:
        write_file(f"{page}.html", html_boilerplate(page))

    # 2. features/<name>/<name>.js + <name>.css
    print("\n[features/]")
    features_dir = "features"
    make_dir(features_dir)
    for feature in FEATURES:
        feature_dir = os.path.join(features_dir, feature)
        make_dir(feature_dir)
        write_file(
            os.path.join(feature_dir, f"{feature}.js"), f"// {feature} feature logic\n"
        )
        write_file(
            os.path.join(feature_dir, f"{feature}.css"),
            f"/* {feature} feature styles */\n",
        )

    # 3. components/<name>/<name>.js + <name>.css
    print("\n[components/]")
    components_dir = "components"
    make_dir(components_dir)
    for component in COMPONENTS:
        component_dir = os.path.join(components_dir, component)
        make_dir(component_dir)
        write_file(
            os.path.join(component_dir, f"{component}.js"),
            f"// {component} component logic\n",
        )
        write_file(
            os.path.join(component_dir, f"{component}.css"),
            f"/* {component} component styles */\n",
        )

    # 4. assets/
    print("\n[assets/]")
    assets_dir = "assets"
    make_dir(assets_dir)

    # 4a. images/<page>/ and fonts/<page>/ (includes a "shared" subfolder for both)
    for parent in ["images", "fonts"]:
        parent_dir = os.path.join(assets_dir, parent)
        make_dir(parent_dir)
        for page in PAGE_SUBFOLDERS:
            make_dir(os.path.join(parent_dir, page))

    # 4b. other flat asset folders (icons, logo, videos)
    for asset_folder in ASSET_FOLDERS:
        make_dir(os.path.join(assets_dir, asset_folder))

    # 5. services/
    print("\n[services/]")
    services_dir = "services"
    make_dir(services_dir)
    for filename, content in SERVICES_FILES.items():
        write_file(os.path.join(services_dir, filename), content)

    # 6. shared/
    print("\n[shared/]")
    shared_dir = "shared"
    make_dir(shared_dir)
    for filename, content in SHARED_FILES.items():
        write_file(os.path.join(shared_dir, filename), content)

    # 7. README.md
    print("\n[README]")
    write_file("README.md", "# Project\n\nFeature-based static website front end.\n")

    print("\nDone! Structure created in current directory.")


if __name__ == "__main__":
    main()
