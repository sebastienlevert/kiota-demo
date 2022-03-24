import {createImportmapFromDiscriminatorValue} from './createImportmapFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Importmap, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Ownermapping extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __importmapid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __targetsystemuserid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importmapid?: Importmap | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overwritetime?: Date | undefined;
    private _ownermappingid?: string | undefined;
    private _ownermappingidunique?: string | undefined;
    private _processcode?: number | undefined;
    private _solutionid?: string | undefined;
    private _sourcesystemusername?: string | undefined;
    private _sourceuservalueforsourcecrmuserlink?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _targetsystemuserdomainname?: string | undefined;
    private _targetsystemuserid?: Systemuser | undefined;
    private _targetuservalueforsourcecrmuserlink?: string | undefined;
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
     * Gets the _importmapid_value property value. 
     * @returns a string
     */
    public get _importmapid_value() {
        return this.__importmapid_value;
    };
    /**
     * Sets the _importmapid_value property value. 
     * @param value Value to set for the _importmapid_value property.
     */
    public set _importmapid_value(value: string | undefined) {
        this.__importmapid_value = value;
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
     * Gets the _targetsystemuserid_value property value. 
     * @returns a string
     */
    public get _targetsystemuserid_value() {
        return this.__targetsystemuserid_value;
    };
    /**
     * Sets the _targetsystemuserid_value property value. 
     * @param value Value to set for the _targetsystemuserid_value property.
     */
    public set _targetsystemuserid_value(value: string | undefined) {
        this.__targetsystemuserid_value = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new ownermapping and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Ownermapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Ownermapping)._createdonbehalfby_value = n.getStringValue(); },
            "_importmapid_value": (o, n) => { (o as unknown as Ownermapping)._importmapid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Ownermapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Ownermapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "_targetsystemuserid_value": (o, n) => { (o as unknown as Ownermapping)._targetsystemuserid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Ownermapping).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Ownermapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Ownermapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Ownermapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importmapid": (o, n) => { (o as unknown as Ownermapping).importmapid = n.getObjectValue<Importmap>(createImportmapFromDiscriminatorValue); },
            "introducedversion": (o, n) => { (o as unknown as Ownermapping).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Ownermapping).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Ownermapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Ownermapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Ownermapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Ownermapping).overwritetime = n.getDateValue(); },
            "ownermappingid": (o, n) => { (o as unknown as Ownermapping).ownermappingid = n.getStringValue(); },
            "ownermappingidunique": (o, n) => { (o as unknown as Ownermapping).ownermappingidunique = n.getStringValue(); },
            "processcode": (o, n) => { (o as unknown as Ownermapping).processcode = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Ownermapping).solutionid = n.getStringValue(); },
            "sourcesystemusername": (o, n) => { (o as unknown as Ownermapping).sourcesystemusername = n.getStringValue(); },
            "sourceuservalueforsourcecrmuserlink": (o, n) => { (o as unknown as Ownermapping).sourceuservalueforsourcecrmuserlink = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Ownermapping).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Ownermapping).statuscode = n.getNumberValue(); },
            "targetsystemuserdomainname": (o, n) => { (o as unknown as Ownermapping).targetsystemuserdomainname = n.getStringValue(); },
            "targetsystemuserid": (o, n) => { (o as unknown as Ownermapping).targetsystemuserid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "targetuservalueforsourcecrmuserlink": (o, n) => { (o as unknown as Ownermapping).targetuservalueforsourcecrmuserlink = n.getStringValue(); },
        };
    };
    /**
     * Gets the importmapid property value. 
     * @returns a importmap
     */
    public get importmapid() {
        return this._importmapid;
    };
    /**
     * Sets the importmapid property value. 
     * @param value Value to set for the importmapid property.
     */
    public set importmapid(value: Importmap | undefined) {
        this._importmapid = value;
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the ownermappingid property value. 
     * @returns a string
     */
    public get ownermappingid() {
        return this._ownermappingid;
    };
    /**
     * Sets the ownermappingid property value. 
     * @param value Value to set for the ownermappingid property.
     */
    public set ownermappingid(value: string | undefined) {
        this._ownermappingid = value;
    };
    /**
     * Gets the ownermappingidunique property value. 
     * @returns a string
     */
    public get ownermappingidunique() {
        return this._ownermappingidunique;
    };
    /**
     * Sets the ownermappingidunique property value. 
     * @param value Value to set for the ownermappingidunique property.
     */
    public set ownermappingidunique(value: string | undefined) {
        this._ownermappingidunique = value;
    };
    /**
     * Gets the processcode property value. 
     * @returns a integer
     */
    public get processcode() {
        return this._processcode;
    };
    /**
     * Sets the processcode property value. 
     * @param value Value to set for the processcode property.
     */
    public set processcode(value: number | undefined) {
        this._processcode = value;
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
        writer.writeStringValue("_importmapid_value", this._importmapid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_targetsystemuserid_value", this._targetsystemuserid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Importmap>("importmapid", this.importmapid);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("ownermappingid", this.ownermappingid);
        writer.writeStringValue("ownermappingidunique", this.ownermappingidunique);
        writer.writeNumberValue("processcode", this.processcode);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("sourcesystemusername", this.sourcesystemusername);
        writer.writeStringValue("sourceuservalueforsourcecrmuserlink", this.sourceuservalueforsourcecrmuserlink);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeStringValue("targetsystemuserdomainname", this.targetsystemuserdomainname);
        writer.writeObjectValue<Systemuser>("targetsystemuserid", this.targetsystemuserid);
        writer.writeStringValue("targetuservalueforsourcecrmuserlink", this.targetuservalueforsourcecrmuserlink);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the sourcesystemusername property value. 
     * @returns a string
     */
    public get sourcesystemusername() {
        return this._sourcesystemusername;
    };
    /**
     * Sets the sourcesystemusername property value. 
     * @param value Value to set for the sourcesystemusername property.
     */
    public set sourcesystemusername(value: string | undefined) {
        this._sourcesystemusername = value;
    };
    /**
     * Gets the sourceuservalueforsourcecrmuserlink property value. 
     * @returns a string
     */
    public get sourceuservalueforsourcecrmuserlink() {
        return this._sourceuservalueforsourcecrmuserlink;
    };
    /**
     * Sets the sourceuservalueforsourcecrmuserlink property value. 
     * @param value Value to set for the sourceuservalueforsourcecrmuserlink property.
     */
    public set sourceuservalueforsourcecrmuserlink(value: string | undefined) {
        this._sourceuservalueforsourcecrmuserlink = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the targetsystemuserdomainname property value. 
     * @returns a string
     */
    public get targetsystemuserdomainname() {
        return this._targetsystemuserdomainname;
    };
    /**
     * Sets the targetsystemuserdomainname property value. 
     * @param value Value to set for the targetsystemuserdomainname property.
     */
    public set targetsystemuserdomainname(value: string | undefined) {
        this._targetsystemuserdomainname = value;
    };
    /**
     * Gets the targetsystemuserid property value. 
     * @returns a systemuser
     */
    public get targetsystemuserid() {
        return this._targetsystemuserid;
    };
    /**
     * Sets the targetsystemuserid property value. 
     * @param value Value to set for the targetsystemuserid property.
     */
    public set targetsystemuserid(value: Systemuser | undefined) {
        this._targetsystemuserid = value;
    };
    /**
     * Gets the targetuservalueforsourcecrmuserlink property value. 
     * @returns a string
     */
    public get targetuservalueforsourcecrmuserlink() {
        return this._targetuservalueforsourcecrmuserlink;
    };
    /**
     * Sets the targetuservalueforsourcecrmuserlink property value. 
     * @param value Value to set for the targetuservalueforsourcecrmuserlink property.
     */
    public set targetuservalueforsourcecrmuserlink(value: string | undefined) {
        this._targetuservalueforsourcecrmuserlink = value;
    };
}
