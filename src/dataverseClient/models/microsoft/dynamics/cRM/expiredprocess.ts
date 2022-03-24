import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {createWorkflowlogFromDiscriminatorValue} from './createWorkflowlogFromDiscriminatorValue';
import {Crmbaseentity, Knowledgearticle, Organization, Processsession, Processstage, Syncerror, Systemuser, Transactioncurrency, Workflow, Workflowlog} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Expiredprocess extends Crmbaseentity implements Parsable {
    private __activestageid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __knowledgearticleid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __processid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _activestageid?: Processstage | undefined;
    private _activestagestartedon?: Date | undefined;
    private _businessprocessflowinstanceid?: string | undefined;
    private _completedon?: Date | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _duration?: number | undefined;
    private _exchangerate?: number | undefined;
    private _expiredProcess_ProcessSessions?: Processsession[] | undefined;
    private _expiredProcess_SyncErrors?: Syncerror[] | undefined;
    private _importsequencenumber?: number | undefined;
    private _knowledgearticleid?: Knowledgearticle | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _processid?: Workflow | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _versionnumber?: number | undefined;
    private _workflowlogs_expiredprocess?: Workflowlog[] | undefined;
    /**
     * Gets the _activestageid_value property value. 
     * @returns a string
     */
    public get _activestageid_value() {
        return this.__activestageid_value;
    };
    /**
     * Sets the _activestageid_value property value. 
     * @param value Value to set for the _activestageid_value property.
     */
    public set _activestageid_value(value: string | undefined) {
        this.__activestageid_value = value;
    };
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
     * Gets the _knowledgearticleid_value property value. 
     * @returns a string
     */
    public get _knowledgearticleid_value() {
        return this.__knowledgearticleid_value;
    };
    /**
     * Sets the _knowledgearticleid_value property value. 
     * @param value Value to set for the _knowledgearticleid_value property.
     */
    public set _knowledgearticleid_value(value: string | undefined) {
        this.__knowledgearticleid_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the activestageid property value. 
     * @returns a processstage
     */
    public get activestageid() {
        return this._activestageid;
    };
    /**
     * Sets the activestageid property value. 
     * @param value Value to set for the activestageid property.
     */
    public set activestageid(value: Processstage | undefined) {
        this._activestageid = value;
    };
    /**
     * Gets the activestagestartedon property value. 
     * @returns a Date
     */
    public get activestagestartedon() {
        return this._activestagestartedon;
    };
    /**
     * Sets the activestagestartedon property value. 
     * @param value Value to set for the activestagestartedon property.
     */
    public set activestagestartedon(value: Date | undefined) {
        this._activestagestartedon = value;
    };
    /**
     * Gets the businessprocessflowinstanceid property value. 
     * @returns a string
     */
    public get businessprocessflowinstanceid() {
        return this._businessprocessflowinstanceid;
    };
    /**
     * Sets the businessprocessflowinstanceid property value. 
     * @param value Value to set for the businessprocessflowinstanceid property.
     */
    public set businessprocessflowinstanceid(value: string | undefined) {
        this._businessprocessflowinstanceid = value;
    };
    /**
     * Gets the completedon property value. 
     * @returns a Date
     */
    public get completedon() {
        return this._completedon;
    };
    /**
     * Sets the completedon property value. 
     * @param value Value to set for the completedon property.
     */
    public set completedon(value: Date | undefined) {
        this._completedon = value;
    };
    /**
     * Instantiates a new expiredprocess and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
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
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
    };
    /**
     * Gets the duration property value. 
     * @returns a integer
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. 
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * Gets the expiredProcess_ProcessSessions property value. 
     * @returns a processsession
     */
    public get expiredProcess_ProcessSessions() {
        return this._expiredProcess_ProcessSessions;
    };
    /**
     * Sets the expiredProcess_ProcessSessions property value. 
     * @param value Value to set for the ExpiredProcess_ProcessSessions property.
     */
    public set expiredProcess_ProcessSessions(value: Processsession[] | undefined) {
        this._expiredProcess_ProcessSessions = value;
    };
    /**
     * Gets the expiredProcess_SyncErrors property value. 
     * @returns a syncerror
     */
    public get expiredProcess_SyncErrors() {
        return this._expiredProcess_SyncErrors;
    };
    /**
     * Sets the expiredProcess_SyncErrors property value. 
     * @param value Value to set for the ExpiredProcess_SyncErrors property.
     */
    public set expiredProcess_SyncErrors(value: Syncerror[] | undefined) {
        this._expiredProcess_SyncErrors = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_activestageid_value": (o, n) => { (o as unknown as Expiredprocess)._activestageid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Expiredprocess)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Expiredprocess)._createdonbehalfby_value = n.getStringValue(); },
            "_knowledgearticleid_value": (o, n) => { (o as unknown as Expiredprocess)._knowledgearticleid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Expiredprocess)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Expiredprocess)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Expiredprocess)._organizationid_value = n.getStringValue(); },
            "_processid_value": (o, n) => { (o as unknown as Expiredprocess)._processid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Expiredprocess)._transactioncurrencyid_value = n.getStringValue(); },
            "activestageid": (o, n) => { (o as unknown as Expiredprocess).activestageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "activestagestartedon": (o, n) => { (o as unknown as Expiredprocess).activestagestartedon = n.getDateValue(); },
            "businessprocessflowinstanceid": (o, n) => { (o as unknown as Expiredprocess).businessprocessflowinstanceid = n.getStringValue(); },
            "completedon": (o, n) => { (o as unknown as Expiredprocess).completedon = n.getDateValue(); },
            "createdbyname": (o, n) => { (o as unknown as Expiredprocess).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Expiredprocess).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Expiredprocess).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "duration": (o, n) => { (o as unknown as Expiredprocess).duration = n.getNumberValue(); },
            "exchangerate": (o, n) => { (o as unknown as Expiredprocess).exchangerate = n.getNumberValue(); },
            "expiredProcess_ProcessSessions": (o, n) => { (o as unknown as Expiredprocess).expiredProcess_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "expiredProcess_SyncErrors": (o, n) => { (o as unknown as Expiredprocess).expiredProcess_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Expiredprocess).importsequencenumber = n.getNumberValue(); },
            "knowledgearticleid": (o, n) => { (o as unknown as Expiredprocess).knowledgearticleid = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "modifiedbyname": (o, n) => { (o as unknown as Expiredprocess).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Expiredprocess).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Expiredprocess).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Expiredprocess).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Expiredprocess).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Expiredprocess).overriddencreatedon = n.getDateValue(); },
            "processid": (o, n) => { (o as unknown as Expiredprocess).processid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Expiredprocess).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Expiredprocess).statuscode = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Expiredprocess).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Expiredprocess).traversedpath = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Expiredprocess).versionnumber = n.getNumberValue(); },
            "workflowlogs_expiredprocess": (o, n) => { (o as unknown as Expiredprocess).workflowlogs_expiredprocess = n.getCollectionOfObjectValues<Workflowlog>(createWorkflowlogFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the knowledgearticleid property value. 
     * @returns a knowledgearticle
     */
    public get knowledgearticleid() {
        return this._knowledgearticleid;
    };
    /**
     * Sets the knowledgearticleid property value. 
     * @param value Value to set for the knowledgearticleid property.
     */
    public set knowledgearticleid(value: Knowledgearticle | undefined) {
        this._knowledgearticleid = value;
    };
    /**
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
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
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_activestageid_value", this._activestageid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_knowledgearticleid_value", this._knowledgearticleid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_processid_value", this._processid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Processstage>("activestageid", this.activestageid);
        writer.writeDateValue("activestagestartedon", this.activestagestartedon);
        writer.writeStringValue("businessprocessflowinstanceid", this.businessprocessflowinstanceid);
        writer.writeDateValue("completedon", this.completedon);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeNumberValue("duration", this.duration);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeCollectionOfObjectValues<Processsession>("expiredProcess_ProcessSessions", this.expiredProcess_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("expiredProcess_SyncErrors", this.expiredProcess_SyncErrors);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Knowledgearticle>("knowledgearticleid", this.knowledgearticleid);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Workflow>("processid", this.processid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeCollectionOfObjectValues<Workflowlog>("workflowlogs_expiredprocess", this.workflowlogs_expiredprocess);
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
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
    /**
     * Gets the workflowlogs_expiredprocess property value. 
     * @returns a workflowlog
     */
    public get workflowlogs_expiredprocess() {
        return this._workflowlogs_expiredprocess;
    };
    /**
     * Sets the workflowlogs_expiredprocess property value. 
     * @param value Value to set for the workflowlogs_expiredprocess property.
     */
    public set workflowlogs_expiredprocess(value: Workflowlog[] | undefined) {
        this._workflowlogs_expiredprocess = value;
    };
}
