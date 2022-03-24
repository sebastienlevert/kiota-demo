import {Solution} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSolutionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Solution {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Solution();
}
