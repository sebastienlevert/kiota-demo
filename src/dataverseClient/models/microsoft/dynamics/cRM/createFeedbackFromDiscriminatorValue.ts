import {Feedback} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeedbackFromDiscriminatorValue(parseNode: ParseNode | undefined) : Feedback {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Feedback();
}
