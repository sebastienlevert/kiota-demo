import {Datasyncstate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDatasyncstateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Datasyncstate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Datasyncstate();
}
