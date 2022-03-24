import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemformFromDiscriminatorValue} from './createSystemformFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {BooleanManagedProperty, Crmbaseentity, Syncerror, Systemform, Systemuser, Workflow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Processtrigger extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __formid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __processid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _controlname?: string | undefined;
    private _controltype?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _event?: string | undefined;
    private _formid?: Systemform | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _methodid?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overwritetime?: Date | undefined;
    private _owningbusinessunit?: string | undefined;
    private _owninguser?: string | undefined;
    private _pipelinestage?: number | undefined;
    private _primaryentitytypecode?: string | undefined;
    private _processid?: Workflow | undefined;
    private _processTrigger_SyncErrors?: Syncerror[] | undefined;
    private _processtriggerid?: string | undefined;
    private _processtriggeridunique?: string | undefined;
    private _scope?: number | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _formid_value property value. 
     * @returns a string
     */
    public get _formid_value() {
        return this.__formid_value;
    };
    /**
     * Sets the _formid_value property value. 
     * @param value Value to set for the _formid_value property.
     */
    public set _formid_value(value: string | undefined) {
        this.__formid_value = value;
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
     * Gets the _processid_value property value. 
     * @returns a string
     */
    public get _processid_value() {
        return this.__processid_value;
    };
    /**
     * Sets the _processid_value property value. 
     * @param value Value to set for the _processid_value property.
     */
    public set _processid_value(value: string | undefined) {
        this.__processid_value = value;
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
     * Instantiates a new processtrigger and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the controlname property value. 
     * @returns a string
     */
    public get controlname() {
        return this._controlname;
    };
    /**
     * Sets the controlname property value. 
     * @param value Value to set for the controlname property.
     */
    public set controlname(value: string | undefined) {
        this._controlname = value;
    };
    /**
     * Gets the controltype property value. 
     * @returns a integer
     */
    public get controltype() {
        return this._controltype;
    };
    /**
     * Sets the controltype property value. 
     * @param value Value to set for the controltype property.
     */
    public set controltype(value: number | undefined) {
        this._controltype = value;
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
     * Gets the event property value. 
     * @returns a string
     */
    public get event() {
        return this._event;
    };
    /**
     * Sets the event property value. 
     * @param value Value to set for the event property.
     */
    public set event(value: string | undefined) {
        this._event = value;
    };
    /**
     * Gets the formid property value. 
     * @returns a systemform
     */
    public get formid() {
        return this._formid;
    };
    /**
     * Sets the formid property value. 
     * @param value Value to set for the formid property.
     */
    public set formid(value: Systemform | undefined) {
        this._formid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Processtrigger)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Processtrigger)._createdonbehalfby_value = n.getStringValue(); },
            "_formid_value": (o, n) => { (o as unknown as Processtrigger)._formid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Processtrigger)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Processtrigger)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Processtrigger)._ownerid_value = n.getStringValue(); },
            "_processid_value": (o, n) => { (o as unknown as Processtrigger)._processid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Processtrigger).componentstate = n.getNumberValue(); },
            "controlname": (o, n) => { (o as unknown as Processtrigger).controlname = n.getStringValue(); },
            "controltype": (o, n) => { (o as unknown as Processtrigger).controltype = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Processtrigger).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Processtrigger).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Processtrigger).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "event": (o, n) => { (o as unknown as Processtrigger).event = n.getStringValue(); },
            "formid": (o, n) => { (o as unknown as Processtrigger).formid = n.getObjectValue<Systemform>(createSystemformFromDiscriminatorValue); },
            "iscustomizable": (o, n) => { (o as unknown as Processtrigger).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Processtrigger).ismanaged = n.getBooleanValue(); },
            "methodid": (o, n) => { (o as unknown as Processtrigger).methodid = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Processtrigger).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Processtrigger).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Processtrigger).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Processtrigger).overwritetime = n.getDateValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Processtrigger).owningbusinessunit = n.getStringValue(); },
            "owninguser": (o, n) => { (o as unknown as Processtrigger).owninguser = n.getStringValue(); },
            "pipelinestage": (o, n) => { (o as unknown as Processtrigger).pipelinestage = n.getNumberValue(); },
            "primaryentitytypecode": (o, n) => { (o as unknown as Processtrigger).primaryentitytypecode = n.getStringValue(); },
            "processid": (o, n) => { (o as unknown as Processtrigger).processid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "processTrigger_SyncErrors": (o, n) => { (o as unknown as Processtrigger).processTrigger_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "processtriggerid": (o, n) => { (o as unknown as Processtrigger).processtriggerid = n.getStringValue(); },
            "processtriggeridunique": (o, n) => { (o as unknown as Processtrigger).processtriggeridunique = n.getStringValue(); },
            "scope": (o, n) => { (o as unknown as Processtrigger).scope = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Processtrigger).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Processtrigger).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
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
     * Gets the methodid property value. 
     * @returns a string
     */
    public get methodid() {
        return this._methodid;
    };
    /**
     * Sets the methodid property value. 
     * @param value Value to set for the methodid property.
     */
    public set methodid(value: string | undefined) {
        this._methodid = value;
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
     * Gets the pipelinestage property value. 
     * @returns a integer
     */
    public get pipelinestage() {
        return this._pipelinestage;
    };
    /**
     * Sets the pipelinestage property value. 
     * @param value Value to set for the pipelinestage property.
     */
    public set pipelinestage(value: number | undefined) {
        this._pipelinestage = value;
    };
    /**
     * Gets the primaryentitytypecode property value. 
     * @returns a string
     */
    public get primaryentitytypecode() {
        return this._primaryentitytypecode;
    };
    /**
     * Sets the primaryentitytypecode property value. 
     * @param value Value to set for the primaryentitytypecode property.
     */
    public set primaryentitytypecode(value: string | undefined) {
        this._primaryentitytypecode = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a workflow
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: Workflow | undefined) {
        this._processid = value;
    };
    /**
     * Gets the processTrigger_SyncErrors property value. 
     * @returns a syncerror
     */
    public get processTrigger_SyncErrors() {
        return this._processTrigger_SyncErrors;
    };
    /**
     * Sets the processTrigger_SyncErrors property value. 
     * @param value Value to set for the ProcessTrigger_SyncErrors property.
     */
    public set processTrigger_SyncErrors(value: Syncerror[] | undefined) {
        this._processTrigger_SyncErrors = value;
    };
    /**
     * Gets the processtriggerid property value. 
     * @returns a string
     */
    public get processtriggerid() {
        return this._processtriggerid;
    };
    /**
     * Sets the processtriggerid property value. 
     * @param value Value to set for the processtriggerid property.
     */
    public set processtriggerid(value: string | undefined) {
        this._processtriggerid = value;
    };
    /**
     * Gets the processtriggeridunique property value. 
     * @returns a string
     */
    public get processtriggeridunique() {
        return this._processtriggeridunique;
    };
    /**
     * Sets the processtriggeridunique property value. 
     * @param value Value to set for the processtriggeridunique property.
     */
    public set processtriggeridunique(value: string | undefined) {
        this._processtriggeridunique = value;
    };
    /**
     * Gets the scope property value. 
     * @returns a integer
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. 
     * @param value Value to set for the scope property.
     */
    public set scope(value: number | undefined) {
        this._scope = value;
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
        writer.writeStringValue("_formid_value", this._formid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_processid_value", this._processid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("controlname", this.controlname);
        writer.writeNumberValue("controltype", this.controltype);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("event", this.event);
        writer.writeObjectValue<Systemform>("formid", this.formid);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("methodid", this.methodid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("owninguser", this.owninguser);
        writer.writeNumberValue("pipelinestage", this.pipelinestage);
        writer.writeStringValue("primaryentitytypecode", this.primaryentitytypecode);
        writer.writeObjectValue<Workflow>("processid", this.processid);
        writer.writeCollectionOfObjectValues<Syncerror>("processTrigger_SyncErrors", this.processTrigger_SyncErrors);
        writer.writeStringValue("processtriggerid", this.processtriggerid);
        writer.writeStringValue("processtriggeridunique", this.processtriggeridunique);
        writer.writeNumberValue("scope", this.scope);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
