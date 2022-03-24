import {Duplicaterule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDuplicateruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Duplicaterule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Duplicaterule();
}
