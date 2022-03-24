import {Processstage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcessstageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Processstage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Processstage();
}
