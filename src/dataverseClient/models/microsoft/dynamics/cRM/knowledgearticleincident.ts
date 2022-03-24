import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Incident, Knowledgearticle, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Knowledgearticleincident extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __incidentid_value?: string | undefined;
    private __knowledgearticleid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _incidentid?: Incident | undefined;
    private _issenttocustomer?: boolean | undefined;
    private _knowledgearticleid?: Knowledgearticle | undefined;
    private _knowledgearticleincident_AsyncOperations?: Asyncoperation[] | undefined;
    private _knowledgearticleincident_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _knowledgearticleincident_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _knowledgearticleincident_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _knowledgearticleincident_ProcessSession?: Processsession[] | undefined;
    private _knowledgeArticleIncident_SyncErrors?: Syncerror[] | undefined;
    private _knowledgearticleincidentid?: string | undefined;
    private _knowledgeusage?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _incidentid_value property value. 
     * @returns a string
     */
    public get _incidentid_value() {
        return this.__incidentid_value;
    };
    /**
     * Sets the _incidentid_value property value. 
     * @param value Value to set for the _incidentid_value property.
     */
    public set _incidentid_value(value: string | undefined) {
        this.__incidentid_value = value;
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
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
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
     * Instantiates a new knowledgearticleincident and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Knowledgearticleincident)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Knowledgearticleincident)._createdonbehalfby_value = n.getStringValue(); },
            "_incidentid_value": (o, n) => { (o as unknown as Knowledgearticleincident)._incidentid_value = n.getStringValue(); },
            "_knowledgearticleid_value": (o, n) => { (o as unknown as Knowledgearticleincident)._knowledgearticleid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Knowledgearticleincident)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Knowledgearticleincident)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Knowledgearticleincident)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Knowledgearticleincident)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Knowledgearticleincident)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Knowledgearticleincident)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Knowledgearticleincident)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Knowledgearticleincident).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Knowledgearticleincident).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Knowledgearticleincident).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Knowledgearticleincident).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Knowledgearticleincident).importsequencenumber = n.getNumberValue(); },
            "incidentid": (o, n) => { (o as unknown as Knowledgearticleincident).incidentid = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "issenttocustomer": (o, n) => { (o as unknown as Knowledgearticleincident).issenttocustomer = n.getBooleanValue(); },
            "knowledgearticleid": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgearticleid = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "knowledgearticleincident_AsyncOperations": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgearticleincident_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "knowledgearticleincident_BulkDeleteFailures": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgearticleincident_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "knowledgearticleincident_MailboxTrackingFolders": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgearticleincident_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "knowledgearticleincident_principalobjectattributeaccess": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgearticleincident_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "knowledgearticleincident_ProcessSession": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgearticleincident_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "knowledgeArticleIncident_SyncErrors": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgeArticleIncident_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "knowledgearticleincidentid": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgearticleincidentid = n.getStringValue(); },
            "knowledgeusage": (o, n) => { (o as unknown as Knowledgearticleincident).knowledgeusage = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Knowledgearticleincident).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Knowledgearticleincident).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Knowledgearticleincident).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Knowledgearticleincident).overriddencreatedon = n.getDateValue(); },
            "owningteam": (o, n) => { (o as unknown as Knowledgearticleincident).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Knowledgearticleincident).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Knowledgearticleincident).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Knowledgearticleincident).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Knowledgearticleincident).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Knowledgearticleincident).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Knowledgearticleincident).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Knowledgearticleincident).versionnumber = n.getNumberValue(); },
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
     * Gets the incidentid property value. 
     * @returns a incident
     */
    public get incidentid() {
        return this._incidentid;
    };
    /**
     * Sets the incidentid property value. 
     * @param value Value to set for the incidentid property.
     */
    public set incidentid(value: Incident | undefined) {
        this._incidentid = value;
    };
    /**
     * Gets the issenttocustomer property value. 
     * @returns a boolean
     */
    public get issenttocustomer() {
        return this._issenttocustomer;
    };
    /**
     * Sets the issenttocustomer property value. 
     * @param value Value to set for the issenttocustomer property.
     */
    public set issenttocustomer(value: boolean | undefined) {
        this._issenttocustomer = value;
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
     * Gets the knowledgearticleincident_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get knowledgearticleincident_AsyncOperations() {
        return this._knowledgearticleincident_AsyncOperations;
    };
    /**
     * Sets the knowledgearticleincident_AsyncOperations property value. 
     * @param value Value to set for the knowledgearticleincident_AsyncOperations property.
     */
    public set knowledgearticleincident_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._knowledgearticleincident_AsyncOperations = value;
    };
    /**
     * Gets the knowledgearticleincident_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get knowledgearticleincident_BulkDeleteFailures() {
        return this._knowledgearticleincident_BulkDeleteFailures;
    };
    /**
     * Sets the knowledgearticleincident_BulkDeleteFailures property value. 
     * @param value Value to set for the knowledgearticleincident_BulkDeleteFailures property.
     */
    public set knowledgearticleincident_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._knowledgearticleincident_BulkDeleteFailures = value;
    };
    /**
     * Gets the knowledgearticleincident_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get knowledgearticleincident_MailboxTrackingFolders() {
        return this._knowledgearticleincident_MailboxTrackingFolders;
    };
    /**
     * Sets the knowledgearticleincident_MailboxTrackingFolders property value. 
     * @param value Value to set for the knowledgearticleincident_MailboxTrackingFolders property.
     */
    public set knowledgearticleincident_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._knowledgearticleincident_MailboxTrackingFolders = value;
    };
    /**
     * Gets the knowledgearticleincident_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get knowledgearticleincident_principalobjectattributeaccess() {
        return this._knowledgearticleincident_principalobjectattributeaccess;
    };
    /**
     * Sets the knowledgearticleincident_principalobjectattributeaccess property value. 
     * @param value Value to set for the knowledgearticleincident_principalobjectattributeaccess property.
     */
    public set knowledgearticleincident_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._knowledgearticleincident_principalobjectattributeaccess = value;
    };
    /**
     * Gets the knowledgearticleincident_ProcessSession property value. 
     * @returns a processsession
     */
    public get knowledgearticleincident_ProcessSession() {
        return this._knowledgearticleincident_ProcessSession;
    };
    /**
     * Sets the knowledgearticleincident_ProcessSession property value. 
     * @param value Value to set for the knowledgearticleincident_ProcessSession property.
     */
    public set knowledgearticleincident_ProcessSession(value: Processsession[] | undefined) {
        this._knowledgearticleincident_ProcessSession = value;
    };
    /**
     * Gets the knowledgeArticleIncident_SyncErrors property value. 
     * @returns a syncerror
     */
    public get knowledgeArticleIncident_SyncErrors() {
        return this._knowledgeArticleIncident_SyncErrors;
    };
    /**
     * Sets the knowledgeArticleIncident_SyncErrors property value. 
     * @param value Value to set for the KnowledgeArticleIncident_SyncErrors property.
     */
    public set knowledgeArticleIncident_SyncErrors(value: Syncerror[] | undefined) {
        this._knowledgeArticleIncident_SyncErrors = value;
    };
    /**
     * Gets the knowledgearticleincidentid property value. 
     * @returns a string
     */
    public get knowledgearticleincidentid() {
        return this._knowledgearticleincidentid;
    };
    /**
     * Sets the knowledgearticleincidentid property value. 
     * @param value Value to set for the knowledgearticleincidentid property.
     */
    public set knowledgearticleincidentid(value: string | undefined) {
        this._knowledgearticleincidentid = value;
    };
    /**
     * Gets the knowledgeusage property value. 
     * @returns a integer
     */
    public get knowledgeusage() {
        return this._knowledgeusage;
    };
    /**
     * Sets the knowledgeusage property value. 
     * @param value Value to set for the knowledgeusage property.
     */
    public set knowledgeusage(value: number | undefined) {
        this._knowledgeusage = value;
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
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_incidentid_value", this._incidentid_value);
        writer.writeStringValue("_knowledgearticleid_value", this._knowledgearticleid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Incident>("incidentid", this.incidentid);
        writer.writeBooleanValue("issenttocustomer", this.issenttocustomer);
        writer.writeObjectValue<Knowledgearticle>("knowledgearticleid", this.knowledgearticleid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("knowledgearticleincident_AsyncOperations", this.knowledgearticleincident_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("knowledgearticleincident_BulkDeleteFailures", this.knowledgearticleincident_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("knowledgearticleincident_MailboxTrackingFolders", this.knowledgearticleincident_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("knowledgearticleincident_principalobjectattributeaccess", this.knowledgearticleincident_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("knowledgearticleincident_ProcessSession", this.knowledgearticleincident_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("knowledgeArticleIncident_SyncErrors", this.knowledgeArticleIncident_SyncErrors);
        writer.writeStringValue("knowledgearticleincidentid", this.knowledgearticleincidentid);
        writer.writeNumberValue("knowledgeusage", this.knowledgeusage);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
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
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
