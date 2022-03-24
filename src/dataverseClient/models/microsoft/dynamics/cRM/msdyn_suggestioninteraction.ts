import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_suggestionrequestpayloadFromDiscriminatorValue} from './createMsdyn_suggestionrequestpayloadFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Incident, Knowledgearticle, Mailboxtrackingfolder, Msdyn_ocliveworkitem, Msdyn_suggestionrequestpayload, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_suggestioninteraction extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_suggestedentity_value?: string | undefined;
    private __msdyn_suggestionfor_value?: string | undefined;
    private __msdyn_suggestionrequestpayload_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_interactioncontext?: string | undefined;
    private _msdyn_interactiontype?: string | undefined;
    private _msdyn_suggestedentity_incident?: Incident | undefined;
    private _msdyn_suggestedentity_knowledgearticle?: Knowledgearticle | undefined;
    private _msdyn_suggestionfor_incident?: Incident | undefined;
    private _msdyn_suggestionfor_msdyn_ocliveworkitem?: Msdyn_ocliveworkitem | undefined;
    private _msdyn_suggestioninteraction_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_suggestioninteraction_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_suggestioninteraction_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_suggestioninteraction_ProcessSession?: Processsession[] | undefined;
    private _msdyn_suggestioninteraction_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_suggestioninteractionid?: string | undefined;
    private _msdyn_suggestionrequestpayload?: Msdyn_suggestionrequestpayload | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _msdyn_suggestedentity_value property value. 
     * @returns a string
     */
    public get _msdyn_suggestedentity_value() {
        return this.__msdyn_suggestedentity_value;
    };
    /**
     * Sets the _msdyn_suggestedentity_value property value. 
     * @param value Value to set for the _msdyn_suggestedentity_value property.
     */
    public set _msdyn_suggestedentity_value(value: string | undefined) {
        this.__msdyn_suggestedentity_value = value;
    };
    /**
     * Gets the _msdyn_suggestionfor_value property value. 
     * @returns a string
     */
    public get _msdyn_suggestionfor_value() {
        return this.__msdyn_suggestionfor_value;
    };
    /**
     * Sets the _msdyn_suggestionfor_value property value. 
     * @param value Value to set for the _msdyn_suggestionfor_value property.
     */
    public set _msdyn_suggestionfor_value(value: string | undefined) {
        this.__msdyn_suggestionfor_value = value;
    };
    /**
     * Gets the _msdyn_suggestionrequestpayload_value property value. 
     * @returns a string
     */
    public get _msdyn_suggestionrequestpayload_value() {
        return this.__msdyn_suggestionrequestpayload_value;
    };
    /**
     * Sets the _msdyn_suggestionrequestpayload_value property value. 
     * @param value Value to set for the _msdyn_suggestionrequestpayload_value property.
     */
    public set _msdyn_suggestionrequestpayload_value(value: string | undefined) {
        this.__msdyn_suggestionrequestpayload_value = value;
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
     * Instantiates a new msdyn_suggestioninteraction and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_suggestioninteraction)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_suggestioninteraction)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_suggestioninteraction)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_suggestioninteraction)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_suggestedentity_value": (o, n) => { (o as unknown as Msdyn_suggestioninteraction)._msdyn_suggestedentity_value = n.getStringValue(); },
            "_msdyn_suggestionfor_value": (o, n) => { (o as unknown as Msdyn_suggestioninteraction)._msdyn_suggestionfor_value = n.getStringValue(); },
            "_msdyn_suggestionrequestpayload_value": (o, n) => { (o as unknown as Msdyn_suggestioninteraction)._msdyn_suggestionrequestpayload_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_suggestioninteraction)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_interactioncontext": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_interactioncontext = n.getStringValue(); },
            "msdyn_interactiontype": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_interactiontype = n.getStringValue(); },
            "msdyn_suggestedentity_incident": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestedentity_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_suggestedentity_knowledgearticle": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestedentity_knowledgearticle = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "msdyn_suggestionfor_incident": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestionfor_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_suggestionfor_msdyn_ocliveworkitem": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestionfor_msdyn_ocliveworkitem = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_suggestioninteraction_AsyncOperations": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestioninteraction_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_suggestioninteraction_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestioninteraction_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_suggestioninteraction_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestioninteraction_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_suggestioninteraction_ProcessSession": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestioninteraction_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_suggestioninteraction_SyncErrors": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestioninteraction_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_suggestioninteractionid": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestioninteractionid = n.getStringValue(); },
            "msdyn_suggestionrequestpayload": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).msdyn_suggestionrequestpayload = n.getObjectValue<Msdyn_suggestionrequestpayload>(createMsdyn_suggestionrequestpayloadFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_suggestioninteraction).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_interactioncontext property value. 
     * @returns a string
     */
    public get msdyn_interactioncontext() {
        return this._msdyn_interactioncontext;
    };
    /**
     * Sets the msdyn_interactioncontext property value. 
     * @param value Value to set for the msdyn_interactioncontext property.
     */
    public set msdyn_interactioncontext(value: string | undefined) {
        this._msdyn_interactioncontext = value;
    };
    /**
     * Gets the msdyn_interactiontype property value. 
     * @returns a string
     */
    public get msdyn_interactiontype() {
        return this._msdyn_interactiontype;
    };
    /**
     * Sets the msdyn_interactiontype property value. 
     * @param value Value to set for the msdyn_interactiontype property.
     */
    public set msdyn_interactiontype(value: string | undefined) {
        this._msdyn_interactiontype = value;
    };
    /**
     * Gets the msdyn_suggestedentity_incident property value. 
     * @returns a incident
     */
    public get msdyn_suggestedentity_incident() {
        return this._msdyn_suggestedentity_incident;
    };
    /**
     * Sets the msdyn_suggestedentity_incident property value. 
     * @param value Value to set for the msdyn_suggestedentity_incident property.
     */
    public set msdyn_suggestedentity_incident(value: Incident | undefined) {
        this._msdyn_suggestedentity_incident = value;
    };
    /**
     * Gets the msdyn_suggestedentity_knowledgearticle property value. 
     * @returns a knowledgearticle
     */
    public get msdyn_suggestedentity_knowledgearticle() {
        return this._msdyn_suggestedentity_knowledgearticle;
    };
    /**
     * Sets the msdyn_suggestedentity_knowledgearticle property value. 
     * @param value Value to set for the msdyn_suggestedentity_knowledgearticle property.
     */
    public set msdyn_suggestedentity_knowledgearticle(value: Knowledgearticle | undefined) {
        this._msdyn_suggestedentity_knowledgearticle = value;
    };
    /**
     * Gets the msdyn_suggestionfor_incident property value. 
     * @returns a incident
     */
    public get msdyn_suggestionfor_incident() {
        return this._msdyn_suggestionfor_incident;
    };
    /**
     * Sets the msdyn_suggestionfor_incident property value. 
     * @param value Value to set for the msdyn_suggestionfor_incident property.
     */
    public set msdyn_suggestionfor_incident(value: Incident | undefined) {
        this._msdyn_suggestionfor_incident = value;
    };
    /**
     * Gets the msdyn_suggestionfor_msdyn_ocliveworkitem property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_suggestionfor_msdyn_ocliveworkitem() {
        return this._msdyn_suggestionfor_msdyn_ocliveworkitem;
    };
    /**
     * Sets the msdyn_suggestionfor_msdyn_ocliveworkitem property value. 
     * @param value Value to set for the msdyn_suggestionfor_msdyn_ocliveworkitem property.
     */
    public set msdyn_suggestionfor_msdyn_ocliveworkitem(value: Msdyn_ocliveworkitem | undefined) {
        this._msdyn_suggestionfor_msdyn_ocliveworkitem = value;
    };
    /**
     * Gets the msdyn_suggestioninteraction_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_suggestioninteraction_AsyncOperations() {
        return this._msdyn_suggestioninteraction_AsyncOperations;
    };
    /**
     * Sets the msdyn_suggestioninteraction_AsyncOperations property value. 
     * @param value Value to set for the msdyn_suggestioninteraction_AsyncOperations property.
     */
    public set msdyn_suggestioninteraction_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_suggestioninteraction_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_suggestioninteraction_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_suggestioninteraction_BulkDeleteFailures() {
        return this._msdyn_suggestioninteraction_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_suggestioninteraction_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_suggestioninteraction_BulkDeleteFailures property.
     */
    public set msdyn_suggestioninteraction_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_suggestioninteraction_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_suggestioninteraction_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_suggestioninteraction_MailboxTrackingFolders() {
        return this._msdyn_suggestioninteraction_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_suggestioninteraction_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_suggestioninteraction_MailboxTrackingFolders property.
     */
    public set msdyn_suggestioninteraction_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_suggestioninteraction_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses() {
        return this._msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_suggestioninteraction_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_suggestioninteraction_ProcessSession() {
        return this._msdyn_suggestioninteraction_ProcessSession;
    };
    /**
     * Sets the msdyn_suggestioninteraction_ProcessSession property value. 
     * @param value Value to set for the msdyn_suggestioninteraction_ProcessSession property.
     */
    public set msdyn_suggestioninteraction_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_suggestioninteraction_ProcessSession = value;
    };
    /**
     * Gets the msdyn_suggestioninteraction_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_suggestioninteraction_SyncErrors() {
        return this._msdyn_suggestioninteraction_SyncErrors;
    };
    /**
     * Sets the msdyn_suggestioninteraction_SyncErrors property value. 
     * @param value Value to set for the msdyn_suggestioninteraction_SyncErrors property.
     */
    public set msdyn_suggestioninteraction_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_suggestioninteraction_SyncErrors = value;
    };
    /**
     * Gets the msdyn_suggestioninteractionid property value. 
     * @returns a string
     */
    public get msdyn_suggestioninteractionid() {
        return this._msdyn_suggestioninteractionid;
    };
    /**
     * Sets the msdyn_suggestioninteractionid property value. 
     * @param value Value to set for the msdyn_suggestioninteractionid property.
     */
    public set msdyn_suggestioninteractionid(value: string | undefined) {
        this._msdyn_suggestioninteractionid = value;
    };
    /**
     * Gets the msdyn_suggestionrequestpayload property value. 
     * @returns a msdyn_suggestionrequestpayload
     */
    public get msdyn_suggestionrequestpayload() {
        return this._msdyn_suggestionrequestpayload;
    };
    /**
     * Sets the msdyn_suggestionrequestpayload property value. 
     * @param value Value to set for the msdyn_suggestionrequestpayload property.
     */
    public set msdyn_suggestionrequestpayload(value: Msdyn_suggestionrequestpayload | undefined) {
        this._msdyn_suggestionrequestpayload = value;
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
        writer.writeStringValue("_msdyn_suggestedentity_value", this._msdyn_suggestedentity_value);
        writer.writeStringValue("_msdyn_suggestionfor_value", this._msdyn_suggestionfor_value);
        writer.writeStringValue("_msdyn_suggestionrequestpayload_value", this._msdyn_suggestionrequestpayload_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_interactioncontext", this.msdyn_interactioncontext);
        writer.writeStringValue("msdyn_interactiontype", this.msdyn_interactiontype);
        writer.writeObjectValue<Incident>("msdyn_suggestedentity_incident", this.msdyn_suggestedentity_incident);
        writer.writeObjectValue<Knowledgearticle>("msdyn_suggestedentity_knowledgearticle", this.msdyn_suggestedentity_knowledgearticle);
        writer.writeObjectValue<Incident>("msdyn_suggestionfor_incident", this.msdyn_suggestionfor_incident);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("msdyn_suggestionfor_msdyn_ocliveworkitem", this.msdyn_suggestionfor_msdyn_ocliveworkitem);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_suggestioninteraction_AsyncOperations", this.msdyn_suggestioninteraction_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_suggestioninteraction_BulkDeleteFailures", this.msdyn_suggestioninteraction_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_suggestioninteraction_MailboxTrackingFolders", this.msdyn_suggestioninteraction_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses", this.msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_suggestioninteraction_ProcessSession", this.msdyn_suggestioninteraction_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_suggestioninteraction_SyncErrors", this.msdyn_suggestioninteraction_SyncErrors);
        writer.writeStringValue("msdyn_suggestioninteractionid", this.msdyn_suggestioninteractionid);
        writer.writeObjectValue<Msdyn_suggestionrequestpayload>("msdyn_suggestionrequestpayload", this.msdyn_suggestionrequestpayload);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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
