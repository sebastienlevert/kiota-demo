import {Entityindex} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntityindexFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entityindex {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entityindex();
}
