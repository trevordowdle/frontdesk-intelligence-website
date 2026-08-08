"""Local preview server that resolves extensionless URLs to .html files,
matching GitHub Pages behavior (e.g. /contact serves contact.html).

Usage: python serve.py [port]
"""
import http.server
import os
import sys


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        resolved = super().translate_path(path)
        if not os.path.exists(resolved) and not os.path.splitext(resolved)[1]:
            html = resolved.rstrip("/\\") + ".html"
            if os.path.exists(html):
                return html
        return resolved


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    print(f"Serving on http://localhost:{port}")
    http.server.ThreadingHTTPServer(("", port), CleanURLHandler).serve_forever()
