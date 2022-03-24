import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignFromDiscriminatorValue} from './createCampaignFromDiscriminatorValue';
import {createCompetitorFromDiscriminatorValue} from './createCompetitorFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSalesliteratureitemFromDiscriminatorValue} from './createSalesliteratureitemFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSubjectFromDiscriminatorValue} from './createSubjectFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Campaign, Campaignactivity, Competitor, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Processstage, Product, Salesliteratureitem, Sharepointdocumentlocation, Subject, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Salesliterature extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __employeecontactid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __subjectid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _campaignactivitysalesliterature_association?: Campaignactivity[] | undefined;
    private _campaignsalesliterature_association?: Campaign[] | undefined;
    private _competitorsalesliterature_association?: Competitor[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _employeecontactid?: Systemuser | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _expirationdate?: Date | undefined;
    private _hasattachments?: boolean | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomerviewable?: boolean | undefined;
    private _keywords?: string | undefined;
    private _literaturetypecode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _processid?: string | undefined;
    private _productsalesliterature_association?: Product[] | undefined;
    private _sales_literature_items?: Salesliteratureitem[] | undefined;
    private _salesLiterature_AsyncOperations?: Asyncoperation[] | undefined;
    private _salesLiterature_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _salesliterature_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _salesliterature_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _salesLiterature_ProcessSessions?: Processsession[] | undefined;
    private _salesLiterature_SharepointDocumentLocation?: Sharepointdocumentlocation[] | undefined;
    private _salesLiterature_SyncErrors?: Syncerror[] | undefined;
    private _salesliteratureid?: string | undefined;
    private _stageid?: string | undefined;
    private _stageid_processstage?: Processstage | undefined;
    private _subjectid?: Subject | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
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
     * Gets the _employeecontactid_value property value. 
     * @returns a string
     */
    public get _employeecontactid_value() {
        return this.__employeecontactid_value;
    };
    /**
     * Sets the _employeecontactid_value property value. 
     * @param value Value to set for the _employeecontactid_value property.
     */
    public set _employeecontactid_value(value: string | undefined) {
        this.__employeecontactid_value = value;
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
     * Gets the _subjectid_value property value. 
     * @returns a string
     */
    public get _subjectid_value() {
        return this.__subjectid_value;
    };
    /**
     * Sets the _subjectid_value property value. 
     * @param value Value to set for the _subjectid_value property.
     */
    public set _subjectid_value(value: string | undefined) {
        this.__subjectid_value = value;
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
     * Gets the campaignactivitysalesliterature_association property value. 
     * @returns a campaignactivity
     */
    public get campaignactivitysalesliterature_association() {
        return this._campaignactivitysalesliterature_association;
    };
    /**
     * Sets the campaignactivitysalesliterature_association property value. 
     * @param value Value to set for the campaignactivitysalesliterature_association property.
     */
    public set campaignactivitysalesliterature_association(value: Campaignactivity[] | undefined) {
        this._campaignactivitysalesliterature_association = value;
    };
    /**
     * Gets the campaignsalesliterature_association property value. 
     * @returns a campaign
     */
    public get campaignsalesliterature_association() {
        return this._campaignsalesliterature_association;
    };
    /**
     * Sets the campaignsalesliterature_association property value. 
     * @param value Value to set for the campaignsalesliterature_association property.
     */
    public set campaignsalesliterature_association(value: Campaign[] | undefined) {
        this._campaignsalesliterature_association = value;
    };
    /**
     * Gets the competitorsalesliterature_association property value. 
     * @returns a competitor
     */
    public get competitorsalesliterature_association() {
        return this._competitorsalesliterature_association;
    };
    /**
     * Sets the competitorsalesliterature_association property value. 
     * @param value Value to set for the competitorsalesliterature_association property.
     */
    public set competitorsalesliterature_association(value: Competitor[] | undefined) {
        this._competitorsalesliterature_association = value;
    };
    /**
     * Instantiates a new salesliterature and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the employeecontactid property value. 
     * @returns a systemuser
     */
    public get employeecontactid() {
        return this._employeecontactid;
    };
    /**
     * Sets the employeecontactid property value. 
     * @param value Value to set for the employeecontactid property.
     */
    public set employeecontactid(value: Systemuser | undefined) {
        this._employeecontactid = value;
    };
    /**
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
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
     * Gets the expirationdate property value. 
     * @returns a Date
     */
    public get expirationdate() {
        return this._expirationdate;
    };
    /**
     * Sets the expirationdate property value. 
     * @param value Value to set for the expirationdate property.
     */
    public set expirationdate(value: Date | undefined) {
        this._expirationdate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Salesliterature)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Salesliterature)._createdonbehalfby_value = n.getStringValue(); },
            "_employeecontactid_value": (o, n) => { (o as unknown as Salesliterature)._employeecontactid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Salesliterature)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Salesliterature)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Salesliterature)._organizationid_value = n.getStringValue(); },
            "_subjectid_value": (o, n) => { (o as unknown as Salesliterature)._subjectid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Salesliterature)._transactioncurrencyid_value = n.getStringValue(); },
            "campaignactivitysalesliterature_association": (o, n) => { (o as unknown as Salesliterature).campaignactivitysalesliterature_association = n.getCollectionOfObjectValues<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "campaignsalesliterature_association": (o, n) => { (o as unknown as Salesliterature).campaignsalesliterature_association = n.getCollectionOfObjectValues<Campaign>(createCampaignFromDiscriminatorValue); },
            "competitorsalesliterature_association": (o, n) => { (o as unknown as Salesliterature).competitorsalesliterature_association = n.getCollectionOfObjectValues<Competitor>(createCompetitorFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Salesliterature).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Salesliterature).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Salesliterature).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Salesliterature).description = n.getStringValue(); },
            "employeecontactid": (o, n) => { (o as unknown as Salesliterature).employeecontactid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityimage": (o, n) => { (o as unknown as Salesliterature).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Salesliterature).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Salesliterature).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Salesliterature).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Salesliterature).exchangerate = n.getNumberValue(); },
            "expirationdate": (o, n) => { (o as unknown as Salesliterature).expirationdate = n.getDateValue(); },
            "hasattachments": (o, n) => { (o as unknown as Salesliterature).hasattachments = n.getBooleanValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Salesliterature).importsequencenumber = n.getNumberValue(); },
            "iscustomerviewable": (o, n) => { (o as unknown as Salesliterature).iscustomerviewable = n.getBooleanValue(); },
            "keywords": (o, n) => { (o as unknown as Salesliterature).keywords = n.getStringValue(); },
            "literaturetypecode": (o, n) => { (o as unknown as Salesliterature).literaturetypecode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Salesliterature).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Salesliterature).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Salesliterature).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Salesliterature).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Salesliterature).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Salesliterature).overriddencreatedon = n.getDateValue(); },
            "processid": (o, n) => { (o as unknown as Salesliterature).processid = n.getStringValue(); },
            "productsalesliterature_association": (o, n) => { (o as unknown as Salesliterature).productsalesliterature_association = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "sales_literature_items": (o, n) => { (o as unknown as Salesliterature).sales_literature_items = n.getCollectionOfObjectValues<Salesliteratureitem>(createSalesliteratureitemFromDiscriminatorValue); },
            "salesLiterature_AsyncOperations": (o, n) => { (o as unknown as Salesliterature).salesLiterature_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "salesLiterature_BulkDeleteFailures": (o, n) => { (o as unknown as Salesliterature).salesLiterature_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "salesliterature_MailboxTrackingFolders": (o, n) => { (o as unknown as Salesliterature).salesliterature_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "salesliterature_principalobjectattributeaccess": (o, n) => { (o as unknown as Salesliterature).salesliterature_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "salesLiterature_ProcessSessions": (o, n) => { (o as unknown as Salesliterature).salesLiterature_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "salesLiterature_SharepointDocumentLocation": (o, n) => { (o as unknown as Salesliterature).salesLiterature_SharepointDocumentLocation = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "salesLiterature_SyncErrors": (o, n) => { (o as unknown as Salesliterature).salesLiterature_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "salesliteratureid": (o, n) => { (o as unknown as Salesliterature).salesliteratureid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Salesliterature).stageid = n.getStringValue(); },
            "stageid_processstage": (o, n) => { (o as unknown as Salesliterature).stageid_processstage = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "subjectid": (o, n) => { (o as unknown as Salesliterature).subjectid = n.getObjectValue<Subject>(createSubjectFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Salesliterature).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Salesliterature).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Salesliterature).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Salesliterature).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Salesliterature).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the hasattachments property value. 
     * @returns a boolean
     */
    public get hasattachments() {
        return this._hasattachments;
    };
    /**
     * Sets the hasattachments property value. 
     * @param value Value to set for the hasattachments property.
     */
    public set hasattachments(value: boolean | undefined) {
        this._hasattachments = value;
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
     * Gets the iscustomerviewable property value. 
     * @returns a boolean
     */
    public get iscustomerviewable() {
        return this._iscustomerviewable;
    };
    /**
     * Sets the iscustomerviewable property value. 
     * @param value Value to set for the iscustomerviewable property.
     */
    public set iscustomerviewable(value: boolean | undefined) {
        this._iscustomerviewable = value;
    };
    /**
     * Gets the keywords property value. 
     * @returns a string
     */
    public get keywords() {
        return this._keywords;
    };
    /**
     * Sets the keywords property value. 
     * @param value Value to set for the keywords property.
     */
    public set keywords(value: string | undefined) {
        this._keywords = value;
    };
    /**
     * Gets the literaturetypecode property value. 
     * @returns a integer
     */
    public get literaturetypecode() {
        return this._literaturetypecode;
    };
    /**
     * Sets the literaturetypecode property value. 
     * @param value Value to set for the literaturetypecode property.
     */
    public set literaturetypecode(value: number | undefined) {
        this._literaturetypecode = value;
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
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
    };
    /**
     * Gets the productsalesliterature_association property value. 
     * @returns a product
     */
    public get productsalesliterature_association() {
        return this._productsalesliterature_association;
    };
    /**
     * Sets the productsalesliterature_association property value. 
     * @param value Value to set for the productsalesliterature_association property.
     */
    public set productsalesliterature_association(value: Product[] | undefined) {
        this._productsalesliterature_association = value;
    };
    /**
     * Gets the sales_literature_items property value. 
     * @returns a salesliteratureitem
     */
    public get sales_literature_items() {
        return this._sales_literature_items;
    };
    /**
     * Sets the sales_literature_items property value. 
     * @param value Value to set for the sales_literature_items property.
     */
    public set sales_literature_items(value: Salesliteratureitem[] | undefined) {
        this._sales_literature_items = value;
    };
    /**
     * Gets the salesLiterature_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get salesLiterature_AsyncOperations() {
        return this._salesLiterature_AsyncOperations;
    };
    /**
     * Sets the salesLiterature_AsyncOperations property value. 
     * @param value Value to set for the SalesLiterature_AsyncOperations property.
     */
    public set salesLiterature_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._salesLiterature_AsyncOperations = value;
    };
    /**
     * Gets the salesLiterature_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get salesLiterature_BulkDeleteFailures() {
        return this._salesLiterature_BulkDeleteFailures;
    };
    /**
     * Sets the salesLiterature_BulkDeleteFailures property value. 
     * @param value Value to set for the SalesLiterature_BulkDeleteFailures property.
     */
    public set salesLiterature_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._salesLiterature_BulkDeleteFailures = value;
    };
    /**
     * Gets the salesliterature_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get salesliterature_MailboxTrackingFolders() {
        return this._salesliterature_MailboxTrackingFolders;
    };
    /**
     * Sets the salesliterature_MailboxTrackingFolders property value. 
     * @param value Value to set for the salesliterature_MailboxTrackingFolders property.
     */
    public set salesliterature_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._salesliterature_MailboxTrackingFolders = value;
    };
    /**
     * Gets the salesliterature_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get salesliterature_principalobjectattributeaccess() {
        return this._salesliterature_principalobjectattributeaccess;
    };
    /**
     * Sets the salesliterature_principalobjectattributeaccess property value. 
     * @param value Value to set for the salesliterature_principalobjectattributeaccess property.
     */
    public set salesliterature_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._salesliterature_principalobjectattributeaccess = value;
    };
    /**
     * Gets the salesLiterature_ProcessSessions property value. 
     * @returns a processsession
     */
    public get salesLiterature_ProcessSessions() {
        return this._salesLiterature_ProcessSessions;
    };
    /**
     * Sets the salesLiterature_ProcessSessions property value. 
     * @param value Value to set for the SalesLiterature_ProcessSessions property.
     */
    public set salesLiterature_ProcessSessions(value: Processsession[] | undefined) {
        this._salesLiterature_ProcessSessions = value;
    };
    /**
     * Gets the salesLiterature_SharepointDocumentLocation property value. 
     * @returns a sharepointdocumentlocation
     */
    public get salesLiterature_SharepointDocumentLocation() {
        return this._salesLiterature_SharepointDocumentLocation;
    };
    /**
     * Sets the salesLiterature_SharepointDocumentLocation property value. 
     * @param value Value to set for the SalesLiterature_SharepointDocumentLocation property.
     */
    public set salesLiterature_SharepointDocumentLocation(value: Sharepointdocumentlocation[] | undefined) {
        this._salesLiterature_SharepointDocumentLocation = value;
    };
    /**
     * Gets the salesLiterature_SyncErrors property value. 
     * @returns a syncerror
     */
    public get salesLiterature_SyncErrors() {
        return this._salesLiterature_SyncErrors;
    };
    /**
     * Sets the salesLiterature_SyncErrors property value. 
     * @param value Value to set for the SalesLiterature_SyncErrors property.
     */
    public set salesLiterature_SyncErrors(value: Syncerror[] | undefined) {
        this._salesLiterature_SyncErrors = value;
    };
    /**
     * Gets the salesliteratureid property value. 
     * @returns a string
     */
    public get salesliteratureid() {
        return this._salesliteratureid;
    };
    /**
     * Sets the salesliteratureid property value. 
     * @param value Value to set for the salesliteratureid property.
     */
    public set salesliteratureid(value: string | undefined) {
        this._salesliteratureid = value;
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
        writer.writeStringValue("_employeecontactid_value", this._employeecontactid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_subjectid_value", this._subjectid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Campaignactivity>("campaignactivitysalesliterature_association", this.campaignactivitysalesliterature_association);
        writer.writeCollectionOfObjectValues<Campaign>("campaignsalesliterature_association", this.campaignsalesliterature_association);
        writer.writeCollectionOfObjectValues<Competitor>("competitorsalesliterature_association", this.competitorsalesliterature_association);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<Systemuser>("employeecontactid", this.employeecontactid);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeDateValue("expirationdate", this.expirationdate);
        writer.writeBooleanValue("hasattachments", this.hasattachments);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("iscustomerviewable", this.iscustomerviewable);
        writer.writeStringValue("keywords", this.keywords);
        writer.writeNumberValue("literaturetypecode", this.literaturetypecode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("processid", this.processid);
        writer.writeCollectionOfObjectValues<Product>("productsalesliterature_association", this.productsalesliterature_association);
        writer.writeCollectionOfObjectValues<Salesliteratureitem>("sales_literature_items", this.sales_literature_items);
        writer.writeCollectionOfObjectValues<Asyncoperation>("salesLiterature_AsyncOperations", this.salesLiterature_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("salesLiterature_BulkDeleteFailures", this.salesLiterature_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("salesliterature_MailboxTrackingFolders", this.salesliterature_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("salesliterature_principalobjectattributeaccess", this.salesliterature_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("salesLiterature_ProcessSessions", this.salesLiterature_ProcessSessions);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("salesLiterature_SharepointDocumentLocation", this.salesLiterature_SharepointDocumentLocation);
        writer.writeCollectionOfObjectValues<Syncerror>("salesLiterature_SyncErrors", this.salesLiterature_SyncErrors);
        writer.writeStringValue("salesliteratureid", this.salesliteratureid);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeObjectValue<Processstage>("stageid_processstage", this.stageid_processstage);
        writer.writeObjectValue<Subject>("subjectid", this.subjectid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a string
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: string | undefined) {
        this._stageid = value;
    };
    /**
     * Gets the stageid_processstage property value. 
     * @returns a processstage
     */
    public get stageid_processstage() {
        return this._stageid_processstage;
    };
    /**
     * Sets the stageid_processstage property value. 
     * @param value Value to set for the stageid_processstage property.
     */
    public set stageid_processstage(value: Processstage | undefined) {
        this._stageid_processstage = value;
    };
    /**
     * Gets the subjectid property value. 
     * @returns a subject
     */
    public get subjectid() {
        return this._subjectid;
    };
    /**
     * Sets the subjectid property value. 
     * @param value Value to set for the subjectid property.
     */
    public set subjectid(value: Subject | undefined) {
        this._subjectid = value;
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
