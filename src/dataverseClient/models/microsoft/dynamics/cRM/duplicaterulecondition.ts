import {createDuplicateruleFromDiscriminatorValue} from './createDuplicateruleFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Duplicaterule, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Duplicaterulecondition extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private _baseattributename?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _duplicateRuleCondition_SyncErrors?: Syncerror[] | undefined;
    private _duplicateruleconditionid?: string | undefined;
    private _ignoreblankvalues?: boolean | undefined;
    private _matchingattributename?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _operatorcode?: number | undefined;
    private _operatorparam?: number | undefined;
    private _owningbusinessunit?: string | undefined;
    private _owninguser?: string | undefined;
    private _regardingobjectid?: Duplicaterule | undefined;
    private _uniquerulename?: string | undefined;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the baseattributename property value. 
     * @returns a string
     */
    public get baseattributename() {
        return this._baseattributename;
    };
    /**
     * Sets the baseattributename property value. 
     * @param value Value to set for the baseattributename property.
     */
    public set baseattributename(value: string | undefined) {
        this._baseattributename = value;
    };
    /**
     * Instantiates a new duplicaterulecondition and sets the default values.
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
     * Gets the duplicateRuleCondition_SyncErrors property value. 
     * @returns a syncerror
     */
    public get duplicateRuleCondition_SyncErrors() {
        return this._duplicateRuleCondition_SyncErrors;
    };
    /**
     * Sets the duplicateRuleCondition_SyncErrors property value. 
     * @param value Value to set for the DuplicateRuleCondition_SyncErrors property.
     */
    public set duplicateRuleCondition_SyncErrors(value: Syncerror[] | undefined) {
        this._duplicateRuleCondition_SyncErrors = value;
    };
    /**
     * Gets the duplicateruleconditionid property value. 
     * @returns a string
     */
    public get duplicateruleconditionid() {
        return this._duplicateruleconditionid;
    };
    /**
     * Sets the duplicateruleconditionid property value. 
     * @param value Value to set for the duplicateruleconditionid property.
     */
    public set duplicateruleconditionid(value: string | undefined) {
        this._duplicateruleconditionid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Duplicaterulecondition)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Duplicaterulecondition)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Duplicaterulecondition)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Duplicaterulecondition)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Duplicaterulecondition)._ownerid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Duplicaterulecondition)._regardingobjectid_value = n.getStringValue(); },
            "baseattributename": (o, n) => { (o as unknown as Duplicaterulecondition).baseattributename = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Duplicaterulecondition).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Duplicaterulecondition).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Duplicaterulecondition).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "duplicateRuleCondition_SyncErrors": (o, n) => { (o as unknown as Duplicaterulecondition).duplicateRuleCondition_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "duplicateruleconditionid": (o, n) => { (o as unknown as Duplicaterulecondition).duplicateruleconditionid = n.getStringValue(); },
            "ignoreblankvalues": (o, n) => { (o as unknown as Duplicaterulecondition).ignoreblankvalues = n.getBooleanValue(); },
            "matchingattributename": (o, n) => { (o as unknown as Duplicaterulecondition).matchingattributename = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Duplicaterulecondition).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Duplicaterulecondition).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Duplicaterulecondition).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "operatorcode": (o, n) => { (o as unknown as Duplicaterulecondition).operatorcode = n.getNumberValue(); },
            "operatorparam": (o, n) => { (o as unknown as Duplicaterulecondition).operatorparam = n.getNumberValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Duplicaterulecondition).owningbusinessunit = n.getStringValue(); },
            "owninguser": (o, n) => { (o as unknown as Duplicaterulecondition).owninguser = n.getStringValue(); },
            "regardingobjectid": (o, n) => { (o as unknown as Duplicaterulecondition).regardingobjectid = n.getObjectValue<Duplicaterule>(createDuplicateruleFromDiscriminatorValue); },
            "uniquerulename": (o, n) => { (o as unknown as Duplicaterulecondition).uniquerulename = n.getStringValue(); },
        };
    };
    /**
     * Gets the ignoreblankvalues property value. 
     * @returns a boolean
     */
    public get ignoreblankvalues() {
        return this._ignoreblankvalues;
    };
    /**
     * Sets the ignoreblankvalues property value. 
     * @param value Value to set for the ignoreblankvalues property.
     */
    public set ignoreblankvalues(value: boolean | undefined) {
        this._ignoreblankvalues = value;
    };
    /**
     * Gets the matchingattributename property value. 
     * @returns a string
     */
    public get matchingattributename() {
        return this._matchingattributename;
    };
    /**
     * Sets the matchingattributename property value. 
     * @param value Value to set for the matchingattributename property.
     */
    public set matchingattributename(value: string | undefined) {
        this._matchingattributename = value;
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
     * Gets the operatorcode property value. 
     * @returns a integer
     */
    public get operatorcode() {
        return this._operatorcode;
    };
    /**
     * Sets the operatorcode property value. 
     * @param value Value to set for the operatorcode property.
     */
    public set operatorcode(value: number | undefined) {
        this._operatorcode = value;
    };
    /**
     * Gets the operatorparam property value. 
     * @returns a integer
     */
    public get operatorparam() {
        return this._operatorparam;
    };
    /**
     * Sets the operatorparam property value. 
     * @param value Value to set for the operatorparam property.
     */
    public set operatorparam(value: number | undefined) {
        this._operatorparam = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a string
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: string | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a string
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: string | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the regardingobjectid property value. 
     * @returns a duplicaterule
     */
    public get regardingobjectid() {
        return this._regardingobjectid;
    };
    /**
     * Sets the regardingobjectid property value. 
     * @param value Value to set for the regardingobjectid property.
     */
    public set regardingobjectid(value: Duplicaterule | undefined) {
        this._regardingobjectid = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("baseattributename", this.baseattributename);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Syncerror>("duplicateRuleCondition_SyncErrors", this.duplicateRuleCondition_SyncErrors);
        writer.writeStringValue("duplicateruleconditionid", this.duplicateruleconditionid);
        writer.writeBooleanValue("ignoreblankvalues", this.ignoreblankvalues);
        writer.writeStringValue("matchingattributename", this.matchingattributename);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("operatorcode", this.operatorcode);
        writer.writeNumberValue("operatorparam", this.operatorparam);
        writer.writeStringValue("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("owninguser", this.owninguser);
        writer.writeObjectValue<Duplicaterule>("regardingobjectid", this.regardingobjectid);
        writer.writeStringValue("uniquerulename", this.uniquerulename);
    };
    /**
     * Gets the uniquerulename property value. 
     * @returns a string
     */
    public get uniquerulename() {
        return this._uniquerulename;
    };
    /**
     * Sets the uniquerulename property value. 
     * @param value Value to set for the uniquerulename property.
     */
    public set uniquerulename(value: string | undefined) {
        this._uniquerulename = value;
    };
}
