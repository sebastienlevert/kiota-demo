import {Subject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : Subject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Subject();
}
