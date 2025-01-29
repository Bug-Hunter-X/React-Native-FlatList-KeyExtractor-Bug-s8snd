# React Native FlatList KeyExtractor Bug
This repository demonstrates a common React Native bug related to the `keyExtractor` prop in the `FlatList` component.  When dealing with large datasets, using an incorrect or inconsistent `keyExtractor` function can lead to unpredictable rendering behavior, including flickering, incorrect item display, and even crashes.

The `bug.js` file shows an example of this bug, while `bugSolution.js` provides a corrected implementation.

## Bug:
The keyExtractor function doesn't provide unique and stable keys for each item in the list, which causes `FlatList` to have difficulty tracking and re-rendering items correctly. This can manifest as visual glitches and unexpected behavior.

## Solution:
The solution uses a unique identifier for each item. In most cases, this will be a unique ID from the data source. If no such ID exists, creating one is essential for `FlatList` to function correctly. This ensures consistent and correct rendering of the list, even with many items.