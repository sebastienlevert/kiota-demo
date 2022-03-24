import {Processstageparameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcessstageparameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Processstageparameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Processstageparameter();
}
