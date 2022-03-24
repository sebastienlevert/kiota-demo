import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKbarticleFromDiscriminatorValue} from './createKbarticleFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createMsdyn_knowledgearticletemplateFromDiscriminatorValue} from './createMsdyn_knowledgearticletemplateFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSalesliteratureFromDiscriminatorValue} from './createSalesliteratureFromDiscriminatorValue';
import {createSubjectFromDiscriminatorValue} from './createSubjectFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Incident, Kbarticle, Knowledgearticle, Msdyn_knowledgearticletemplate, Organization, Processsession, Product, Salesliterature, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Subject extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdbyexternalparty_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedbyexternalparty_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __parentsubject_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _featuremask?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_subject_knowledgearticletemplate_subjectid?: Msdyn_knowledgearticletemplate[] | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _parentsubject?: Subject | undefined;
    private _subject_AsyncOperations?: Asyncoperation[] | undefined;
    private _subject_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _subject_incidents?: Incident[] | undefined;
    private _subject_kb_articles?: Kbarticle[] | undefined;
    private _subject_knowledgearticles?: Knowledgearticle[] | undefined;
    private _subject_parent_subject?: Subject[] | undefined;
    private _subject_ProcessSessions?: Processsession[] | undefined;
    private _subject_products?: Product[] | undefined;
    private _subject_sales_literature?: Salesliterature[] | undefined;
    private _subject_SyncErrors?: Syncerror[] | undefined;
    private _subjectid?: string | undefined;
    private _title?: string | undefined;
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
     * Gets the _createdbyexternalparty_value property value. 
     * @returns a string
     */
    public get _createdbyexternalparty_value() {
        return this.__createdbyexternalparty_value;
    };
    /**
     * Sets the _createdbyexternalparty_value property value. 
     * @param value Value to set for the _createdbyexternalparty_value property.
     */
    public set _createdbyexternalparty_value(value: string | undefined) {
        this.__createdbyexternalparty_value = value;
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
     * Gets the _modifiedbyexternalparty_value property value. 
     * @returns a string
     */
    public get _modifiedbyexternalparty_value() {
        return this.__modifiedbyexternalparty_value;
    };
    /**
     * Sets the _modifiedbyexternalparty_value property value. 
     * @param value Value to set for the _modifiedbyexternalparty_value property.
     */
    public set _modifiedbyexternalparty_value(value: string | undefined) {
        this.__modifiedbyexternalparty_value = value;
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
     * Gets the _parentsubject_value property value. 
     * @returns a string
     */
    public get _parentsubject_value() {
        return this.__parentsubject_value;
    };
    /**
     * Sets the _parentsubject_value property value. 
     * @param value Value to set for the _parentsubject_value property.
     */
    public set _parentsubject_value(value: string | undefined) {
        this.__parentsubject_value = value;
    };
    /**
     * Instantiates a new subject and sets the default values.
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
     * Gets the featuremask property value. 
     * @returns a integer
     */
    public get featuremask() {
        return this._featuremask;
    };
    /**
     * Sets the featuremask property value. 
     * @param value Value to set for the featuremask property.
     */
    public set featuremask(value: number | undefined) {
        this._featuremask = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Subject)._createdby_value = n.getStringValue(); },
            "_createdbyexternalparty_value": (o, n) => { (o as unknown as Subject)._createdbyexternalparty_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Subject)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Subject)._modifiedby_value = n.getStringValue(); },
            "_modifiedbyexternalparty_value": (o, n) => { (o as unknown as Subject)._modifiedbyexternalparty_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Subject)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Subject)._organizationid_value = n.getStringValue(); },
            "_parentsubject_value": (o, n) => { (o as unknown as Subject)._parentsubject_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Subject).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Subject).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Subject).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Subject).description = n.getStringValue(); },
            "featuremask": (o, n) => { (o as unknown as Subject).featuremask = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Subject).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Subject).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Subject).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Subject).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_subject_knowledgearticletemplate_subjectid": (o, n) => { (o as unknown as Subject).msdyn_subject_knowledgearticletemplate_subjectid = n.getCollectionOfObjectValues<Msdyn_knowledgearticletemplate>(createMsdyn_knowledgearticletemplateFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Subject).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Subject).overriddencreatedon = n.getDateValue(); },
            "parentsubject": (o, n) => { (o as unknown as Subject).parentsubject = n.getObjectValue<Subject>(createSubjectFromDiscriminatorValue); },
            "subject_AsyncOperations": (o, n) => { (o as unknown as Subject).subject_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "subject_BulkDeleteFailures": (o, n) => { (o as unknown as Subject).subject_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "subject_incidents": (o, n) => { (o as unknown as Subject).subject_incidents = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "subject_kb_articles": (o, n) => { (o as unknown as Subject).subject_kb_articles = n.getCollectionOfObjectValues<Kbarticle>(createKbarticleFromDiscriminatorValue); },
            "subject_knowledgearticles": (o, n) => { (o as unknown as Subject).subject_knowledgearticles = n.getCollectionOfObjectValues<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "subject_parent_subject": (o, n) => { (o as unknown as Subject).subject_parent_subject = n.getCollectionOfObjectValues<Subject>(createSubjectFromDiscriminatorValue); },
            "subject_ProcessSessions": (o, n) => { (o as unknown as Subject).subject_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "subject_products": (o, n) => { (o as unknown as Subject).subject_products = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "subject_sales_literature": (o, n) => { (o as unknown as Subject).subject_sales_literature = n.getCollectionOfObjectValues<Salesliterature>(createSalesliteratureFromDiscriminatorValue); },
            "subject_SyncErrors": (o, n) => { (o as unknown as Subject).subject_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "subjectid": (o, n) => { (o as unknown as Subject).subjectid = n.getStringValue(); },
            "title": (o, n) => { (o as unknown as Subject).title = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Subject).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_subject_knowledgearticletemplate_subjectid property value. 
     * @returns a msdyn_knowledgearticletemplate
     */
    public get msdyn_subject_knowledgearticletemplate_subjectid() {
        return this._msdyn_subject_knowledgearticletemplate_subjectid;
    };
    /**
     * Sets the msdyn_subject_knowledgearticletemplate_subjectid property value. 
     * @param value Value to set for the msdyn_subject_knowledgearticletemplate_subjectid property.
     */
    public set msdyn_subject_knowledgearticletemplate_subjectid(value: Msdyn_knowledgearticletemplate[] | undefined) {
        this._msdyn_subject_knowledgearticletemplate_subjectid = value;
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
     * Gets the parentsubject property value. 
     * @returns a subject
     */
    public get parentsubject() {
        return this._parentsubject;
    };
    /**
     * Sets the parentsubject property value. 
     * @param value Value to set for the parentsubject property.
     */
    public set parentsubject(value: Subject | undefined) {
        this._parentsubject = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdbyexternalparty_value", this._createdbyexternalparty_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedbyexternalparty_value", this._modifiedbyexternalparty_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_parentsubject_value", this._parentsubject_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("featuremask", this.featuremask);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_knowledgearticletemplate>("msdyn_subject_knowledgearticletemplate_subjectid", this.msdyn_subject_knowledgearticletemplate_subjectid);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Subject>("parentsubject", this.parentsubject);
        writer.writeCollectionOfObjectValues<Asyncoperation>("subject_AsyncOperations", this.subject_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("subject_BulkDeleteFailures", this.subject_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Incident>("subject_incidents", this.subject_incidents);
        writer.writeCollectionOfObjectValues<Kbarticle>("subject_kb_articles", this.subject_kb_articles);
        writer.writeCollectionOfObjectValues<Knowledgearticle>("subject_knowledgearticles", this.subject_knowledgearticles);
        writer.writeCollectionOfObjectValues<Subject>("subject_parent_subject", this.subject_parent_subject);
        writer.writeCollectionOfObjectValues<Processsession>("subject_ProcessSessions", this.subject_ProcessSessions);
        writer.writeCollectionOfObjectValues<Product>("subject_products", this.subject_products);
        writer.writeCollectionOfObjectValues<Salesliterature>("subject_sales_literature", this.subject_sales_literature);
        writer.writeCollectionOfObjectValues<Syncerror>("subject_SyncErrors", this.subject_SyncErrors);
        writer.writeStringValue("subjectid", this.subjectid);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the subject_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get subject_AsyncOperations() {
        return this._subject_AsyncOperations;
    };
    /**
     * Sets the subject_AsyncOperations property value. 
     * @param value Value to set for the Subject_AsyncOperations property.
     */
    public set subject_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._subject_AsyncOperations = value;
    };
    /**
     * Gets the subject_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get subject_BulkDeleteFailures() {
        return this._subject_BulkDeleteFailures;
    };
    /**
     * Sets the subject_BulkDeleteFailures property value. 
     * @param value Value to set for the Subject_BulkDeleteFailures property.
     */
    public set subject_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._subject_BulkDeleteFailures = value;
    };
    /**
     * Gets the subject_incidents property value. 
     * @returns a incident
     */
    public get subject_incidents() {
        return this._subject_incidents;
    };
    /**
     * Sets the subject_incidents property value. 
     * @param value Value to set for the subject_incidents property.
     */
    public set subject_incidents(value: Incident[] | undefined) {
        this._subject_incidents = value;
    };
    /**
     * Gets the subject_kb_articles property value. 
     * @returns a kbarticle
     */
    public get subject_kb_articles() {
        return this._subject_kb_articles;
    };
    /**
     * Sets the subject_kb_articles property value. 
     * @param value Value to set for the subject_kb_articles property.
     */
    public set subject_kb_articles(value: Kbarticle[] | undefined) {
        this._subject_kb_articles = value;
    };
    /**
     * Gets the subject_knowledgearticles property value. 
     * @returns a knowledgearticle
     */
    public get subject_knowledgearticles() {
        return this._subject_knowledgearticles;
    };
    /**
     * Sets the subject_knowledgearticles property value. 
     * @param value Value to set for the subject_knowledgearticles property.
     */
    public set subject_knowledgearticles(value: Knowledgearticle[] | undefined) {
        this._subject_knowledgearticles = value;
    };
    /**
     * Gets the subject_parent_subject property value. 
     * @returns a subject
     */
    public get subject_parent_subject() {
        return this._subject_parent_subject;
    };
    /**
     * Sets the subject_parent_subject property value. 
     * @param value Value to set for the subject_parent_subject property.
     */
    public set subject_parent_subject(value: Subject[] | undefined) {
        this._subject_parent_subject = value;
    };
    /**
     * Gets the subject_ProcessSessions property value. 
     * @returns a processsession
     */
    public get subject_ProcessSessions() {
        return this._subject_ProcessSessions;
    };
    /**
     * Sets the subject_ProcessSessions property value. 
     * @param value Value to set for the Subject_ProcessSessions property.
     */
    public set subject_ProcessSessions(value: Processsession[] | undefined) {
        this._subject_ProcessSessions = value;
    };
    /**
     * Gets the subject_products property value. 
     * @returns a product
     */
    public get subject_products() {
        return this._subject_products;
    };
    /**
     * Sets the subject_products property value. 
     * @param value Value to set for the subject_products property.
     */
    public set subject_products(value: Product[] | undefined) {
        this._subject_products = value;
    };
    /**
     * Gets the subject_sales_literature property value. 
     * @returns a salesliterature
     */
    public get subject_sales_literature() {
        return this._subject_sales_literature;
    };
    /**
     * Sets the subject_sales_literature property value. 
     * @param value Value to set for the subject_sales_literature property.
     */
    public set subject_sales_literature(value: Salesliterature[] | undefined) {
        this._subject_sales_literature = value;
    };
    /**
     * Gets the subject_SyncErrors property value. 
     * @returns a syncerror
     */
    public get subject_SyncErrors() {
        return this._subject_SyncErrors;
    };
    /**
     * Sets the subject_SyncErrors property value. 
     * @param value Value to set for the Subject_SyncErrors property.
     */
    public set subject_SyncErrors(value: Syncerror[] | undefined) {
        this._subject_SyncErrors = value;
    };
    /**
     * Gets the subjectid property value. 
     * @returns a string
     */
    public get subjectid() {
        return this._subjectid;
    };
    /**
     * Sets the subjectid property value. 
     * @param value Value to set for the subjectid property.
     */
    public set subjectid(value: string | undefined) {
        this._subjectid = value;
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
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
