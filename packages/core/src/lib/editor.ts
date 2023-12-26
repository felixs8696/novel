import { EditorState } from "@tiptap/pm/state";

export const getPrevText = (
  editorState: EditorState,
  {
    chars,
    offset = 0,
  }: {
    chars: number;
    offset?: number;
  }
) => {
  // for now, we're using textBetween for now until we can figure out a way to stream markdown text
  // with proper formatting: https://github.com/steven-tey/novel/discussions/7
  return editorState.doc.textBetween(
    Math.max(0, editorState.selection.from - chars),
    editorState.selection.from - offset,
    "\n"
  );
  // complete(editor.storage.markdown.getMarkdown());
};
