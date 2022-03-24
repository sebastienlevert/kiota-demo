import {Duplicaterulecondition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDuplicateruleconditionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Duplicaterulecondition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Duplicaterulecondition();
}
