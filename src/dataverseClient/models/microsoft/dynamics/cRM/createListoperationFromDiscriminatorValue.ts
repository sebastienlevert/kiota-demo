import {Listoperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListoperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Listoperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Listoperation();
}
