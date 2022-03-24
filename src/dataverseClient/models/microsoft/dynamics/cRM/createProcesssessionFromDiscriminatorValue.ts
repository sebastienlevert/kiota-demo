import {Processsession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcesssessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Processsession {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Processsession();
}
