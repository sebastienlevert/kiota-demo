import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSdkmessageprocessingstepFromDiscriminatorValue} from './createSdkmessageprocessingstepFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Organization, Sdkmessageprocessingstep, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sdkmessageprocessingstepsecureconfig extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customizationlevel?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _sdkmessageprocessingstepsecureconfigid?: string | undefined;
    private _sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep?: Sdkmessageprocessingstep[] | undefined;
    private _sdkmessageprocessingstepsecureconfigidunique?: string | undefined;
    private _secureconfig?: string | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Instantiates a new sdkmessageprocessingstepsecureconfig and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the customizationlevel property value. 
     * @returns a integer
     */
    public get customizationlevel() {
        return this._customizationlevel;
    };
    /**
     * Sets the customizationlevel property value. 
     * @param value Value to set for the customizationlevel property.
     */
    public set customizationlevel(value: number | undefined) {
        this._customizationlevel = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customizationlevel": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).customizationlevel = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "sdkmessageprocessingstepsecureconfigid": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).sdkmessageprocessingstepsecureconfigid = n.getStringValue(); },
            "sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep = n.getCollectionOfObjectValues<Sdkmessageprocessingstep>(createSdkmessageprocessingstepFromDiscriminatorValue); },
            "sdkmessageprocessingstepsecureconfigidunique": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).sdkmessageprocessingstepsecureconfigidunique = n.getStringValue(); },
            "secureconfig": (o, n) => { (o as unknown as Sdkmessageprocessingstepsecureconfig).secureconfig = n.getStringValue(); },
        };
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the sdkmessageprocessingstepsecureconfigid property value. 
     * @returns a string
     */
    public get sdkmessageprocessingstepsecureconfigid() {
        return this._sdkmessageprocessingstepsecureconfigid;
    };
    /**
     * Sets the sdkmessageprocessingstepsecureconfigid property value. 
     * @param value Value to set for the sdkmessageprocessingstepsecureconfigid property.
     */
    public set sdkmessageprocessingstepsecureconfigid(value: string | undefined) {
        this._sdkmessageprocessingstepsecureconfigid = value;
    };
    /**
     * Gets the sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep property value. 
     * @returns a sdkmessageprocessingstep
     */
    public get sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep() {
        return this._sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep;
    };
    /**
     * Sets the sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep property value. 
     * @param value Value to set for the sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep property.
     */
    public set sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep(value: Sdkmessageprocessingstep[] | undefined) {
        this._sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep = value;
    };
    /**
     * Gets the sdkmessageprocessingstepsecureconfigidunique property value. 
     * @returns a string
     */
    public get sdkmessageprocessingstepsecureconfigidunique() {
        return this._sdkmessageprocessingstepsecureconfigidunique;
    };
    /**
     * Sets the sdkmessageprocessingstepsecureconfigidunique property value. 
     * @param value Value to set for the sdkmessageprocessingstepsecureconfigidunique property.
     */
    public set sdkmessageprocessingstepsecureconfigidunique(value: string | undefined) {
        this._sdkmessageprocessingstepsecureconfigidunique = value;
    };
    /**
     * Gets the secureconfig property value. 
     * @returns a string
     */
    public get secureconfig() {
        return this._secureconfig;
    };
    /**
     * Sets the secureconfig property value. 
     * @param value Value to set for the secureconfig property.
     */
    public set secureconfig(value: string | undefined) {
        this._secureconfig = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("customizationlevel", this.customizationlevel);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeStringValue("sdkmessageprocessingstepsecureconfigid", this.sdkmessageprocessingstepsecureconfigid);
        writer.writeCollectionOfObjectValues<Sdkmessageprocessingstep>("sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep", this.sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep);
        writer.writeStringValue("sdkmessageprocessingstepsecureconfigidunique", this.sdkmessageprocessingstepsecureconfigidunique);
        writer.writeStringValue("secureconfig", this.secureconfig);
    };
}
