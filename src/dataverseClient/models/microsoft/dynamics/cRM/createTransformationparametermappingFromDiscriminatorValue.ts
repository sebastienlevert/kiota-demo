import {Transformationparametermapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTransformationparametermappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Transformationparametermapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Transformationparametermapping();
}
